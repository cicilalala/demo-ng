import {Component, OnInit} from '@angular/core';
import {Stock, StocksService} from '../stocks.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.sass']
})
export class StockFormComponent implements OnInit {
  public stock: Stock = new Stock(0, '', 0, 0, '', []);
  public stockId: number;
  public title: string;
  private state = 1; // 默认1为修改，2为创建
  formModel: FormGroup;
  fb: FormBuilder;
  categorie = ['IT', '互联网', '金融'];

  constructor(public routerInfo: ActivatedRoute, private stocksService: StocksService, public router: Router) {
  }

  ngOnInit() {
    this.stockId = this.routerInfo.snapshot.params['id'] - 0;
    this.fb = new FormBuilder();
    this.formModel = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      price: [0, [Validators.required, Validators.min(0)]],
      desc: ['', [Validators.required, Validators.min(0)]],
      categories: this.fb.array([
        [false],
        [false],
        [false]
      ], this.categoriesSelectValidator)
    });
    if (this.stockId <= 0) {
      this.title = '新建';
      this.state = 2;
    } else {
      this.title = '修改';
      this.state = 1;
      this.stocksService.getStock(this.stockId).subscribe(
        value => {
          this.stock = value as Stock;
          // 给formModel做数据更新 reset 函数
          this.formModel.reset({
            name: value.name,
            price: value.price,
            desc: value.desc,
            categories: [
              value.categories.indexOf(this.categorie[0]) > -1,
              value.categories.indexOf(this.categorie[1]) > -1,
              value.categories.indexOf(this.categorie[2]) > -1
            ],
          });
        }
      );
    }
  }

  save() {
    const arr = [];
    let index = 0;
    for (let i = 0; i < 3; i++) {
      if (this.formModel.value.categories[i]) {
        arr[index++] = this.categorie[i];
      }
    }
    this.formModel.value.categories = arr;
    this.formModel.value.rating = this.stock.rating;
    this.stock = this.formModel.value; // 更新股票详情
    if (this.state === 1) {
      this.stock.id = this.stockId;
    }
    Object.assign(this.stock, this.formModel.value);
    this.stocksService.addOrUpdata(this.stock).subscribe(val => {
      if (val) {
        this.router.navigateByUrl('/stock');
      }
    });

  }

  quite() {
    this.router.navigateByUrl('/stock');
  }

  // 自定义表单数组校验器，只是选择一个
  categoriesSelectValidator(control: FormArray) {
    let valid = false;
    control.controls.forEach(c => {
      if (c.value) {
        valid = c.value;
      }
    });
    if (valid) {
      return null; // 如果有一个选上了，则返回一个空，校验通过
    } else {
      return {categorieLength: true}; // 如果没有选上的，校验不通过，返回一个对象
    }
  }

}
