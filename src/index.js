import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function RenderContent(props) {
  if(props.childrenClass) {
    return <div class = {props.class}>
              <div class= {props.childrenClass}>
              <RenderChildComponet/>
              </div>
          </div>
  }

  return <div class = {props.class}></div>
}

function RenderChildComponet()
{
  const data = [
    {
        titleName: 'Cá Nhân',
        className: 'icon  ic-24-LibraryTab'

    },
    {
        titleName: 'Khám Phá',
        className: 'icon  ic-24-HomeTab'
    },
    {
      titleName: 'zingchart',
      className: 'icon  ic-24-ChartTab'

    },
    {
        titleName: 'Radio',
        className: 'icon  ic-24-RadioTab'
    },
    {
        titleName: 'Radio',
        className: 'icon  ic-24-FeedTab'
    }
  ];

  const listItems = data.map((item, key) => 
    <li class="zm-navbar-item">
      <a title={item.titleName}><i class={item.className}></i><span>{item.titleName}</span></a>
    </li>
  );

  return <nav class="zm-navbar zm-navbar-main">
    <ul class="zm-navbar-menu">
      {listItems}
    </ul>
  </nav>
}

function ZingMp3() {
  return (
    <div>
      <RenderContent class="zm-sidebar-wrapper-left" childrenClass="sizeBar-component-left" />
      <RenderContent class="zm-main-box" />
      <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
      <RenderContent class="sidebar-wrapper-right" />
    </div>
  )
}

ReactDOM.render(
  <ZingMp3/>,
  document.getElementById('root')
);

