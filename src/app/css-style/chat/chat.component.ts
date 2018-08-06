import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // code() {
  //   // 获取相应的元素
  //   const input = document.getElementById('input');
  //   const messages = document.getElementById('messages');
  //   // 监听input的键盘事件
  //   input.addEventListener('keypress', (event) => {
  //     // 检查是否按下Enter键
  //     if (event.keyCode === 13) {
  //       // 检查字段是否有效
  //       if (input.validity.valid) {
  //         // 使用该值创建DOM元素
  //         const message = this.createMessage(input.value);
  //         // 将新创建的DOM元素添加到消息列表
  //         messages.appendChild(message);
  //         // 清除输入框的值
  //         input.value = '';
  //         // 滚动到消息列表的底部
  //         messages.parentNode.scrollTop = messages.parentNode.scrollHeight;
  //       }
  //     }
  //   });
  // }

  // 将input的值转换为HTML的字符串

  createMessage(value) {
    return this.stringToDom(`
        <li>
            <div class="message message--mine" data-timestamp="${new Date().toString()}"> ${value} </div>
        </li>
    `);
  }
  // 将字符串转换为真实的DOM
  stringToDom(string) {
    const template = document.createElement('template');
    template.innerHTML = string.trim();
    return template.content.firstChild;
  }
}
