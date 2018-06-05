// 引入装饰器
import { Component } from '@angular/core';

// 通过装饰器来注解组件
@Component({
  selector: 'app-root', // 是一个 CSS 选择器，它会告诉 Angular，一旦在模板 HTML 中找到了这个选择器对应的标签，就创建并插入该组件的一个实例。
  templateUrl: './app.component.html',  // 该组件的 HTML 模板文件相对于这个组件文件的地址。
  styleUrls: ['./app.component.css']  // 引入该组件的样式文件
})

// 声明组件类，并为其指定元数据。
export class AppComponent {
  title = 'Tour of Heroes';
}
