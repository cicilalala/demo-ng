import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Stock, StocksService} from '../stocks.service';
import 'rxjs/Rx';


@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.sass'],
})
export class StockManageComponent implements OnInit {
  @ViewChild('pop') pop;
  public stocks: Array<Stock> = [];
  public keyword: string;
  public state = false;
  currentId: number;

  constructor(public router: Router, public stocksService: StocksService) {
  }

  ngOnInit() {
    this.getAll();
  }

  // 获取所有
  getAll() {
    this.stocksService.getStocks().subscribe(v => this.stocks = v);
  }

  // 创建
  create() {
    this.router.navigateByUrl('/stock/');
  }

// 更新
  update(stock: Stock) {
    this.router.navigateByUrl('/stock/' + stock.id);
  }

// 删除
  delete(id) {
    this.pop.openPop('确定要删除吗？');
    this.currentId = id;
  }

  search(e) {
    this.keyword = e;
  }

  getState(state) {
    if (state) {
      this.stocksService.delete(this.currentId).subscribe(val => {
        if (val) {
          this.getAll();
        }
      });
    }
  }

}




