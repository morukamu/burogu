'use strict';
const burogu = document.getElementById('burogu');

const h1 = document.createElement('h1');
h1.innerText = '実習のブログの感想';
burogu.appendChild(h1);

const h2 = document.createElement('h2');
h2.innerText = 'はじめての実習を終えて思ったことの感想';
burogu.appendChild(h2);

const p = document.createElement('p');
p.innerText =
  '　実習にいた期間が、１１月５日から１１月７日と短いなと思ったのと、内部の組立ては、細かい部分があり、その部分は作業をしませんでした。とあるのですけど、自分で仕事をある程度選べるんだと思いました。\n' +
  '　一人で私は悩みを今日まで抱えて来ました、とありますが毎日が大変だと思いました。'
burogu.appendChild(p);

const h2_2 = document.createElement('h2');
h2_2.innerText = 'もうすぐで訓練の終わりにの感想';
burogu.appendChild(h2_2);

const p_2 = document.createElement('p');
p_2.innerText =
  '　実習で経験したことで、必要以上に頑張らないこととあるのですが、ストレスを溜めないようにすることも仕事を長続きする上で大切なことだと思いました。\n' +
  '　それと、これから就職活動に入るということなので、良いなと思いました。'
burogu.appendChild(p_2);

const h2_3 = document.createElement('h2');
h2_3.innerText = '初めての企業実習についての感想';
burogu.appendChild(h2_3);

const p_3 = document.createElement('p');
p_3.innerText =
  '　工場が広いとあったので迷わないか心配になりました。\n' +
  '　実習生はこんな程度かと思われたくないとあったので、プライドの高い人だと思いました。\n' +
  '　自分は笑顔ができない分、大きな声で挨拶を欠かしませんでした、とあったのですけど何で笑顔ができないのかが気になります。'
burogu.appendChild(p_3);