// 按需全局引入 vant组件
import Vue from 'vue'
// 导航栏
import { NavBar , Button } from 'vant';
// 轮播
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';

import { Tabbar, TabbarItem } from 'vant';
import { Form } from 'vant';

import { Field } from 'vant';
import { Search } from 'vant';

import { Card } from 'vant';

import { List } from 'vant';
import { Cell } from 'vant';
import { Tag } from 'vant';
import { SwipeCell } from 'vant';
import { Dialog } from 'vant';
// 加载
import { Loading } from 'vant';

import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import { Image as VanImage } from 'vant';


import { Sku } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Sku);
Vue.use(VanImage);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Loading);

// 全局注册
Vue.use(Dialog);

Vue.use(SwipeCell);
Vue.use(Tag);
Vue.use(Card);

Vue.use(Cell);
Vue.use(List);
Vue.use(Search);

Vue.use(Field);
Vue.use(Form);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Lazyload);

Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Button);
