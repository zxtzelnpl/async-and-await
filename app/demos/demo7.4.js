// 语法标准还不确定

export default function demo74() {
  console.log('demo7-4');

  const t1 = function(){
    return new Promise((resolve,reject)=>{
      console.log(1);
      console.log(2);
      new Promise((resolve,reject)=>{
        Promise.resolve()
        .then(() => console.log('t1p'))
        .then(()=>resolve())
      })
      .then(res=>{
        console.log(3)
        console.log(4)
      });
    });
  }

  const t2 = function(){
    return new Promise((resolve,reject)=>{
      console.log(5);
      console.log(6);
      new Promise((resolve,reject)=>{
        Promise.resolve()
        .then(() => console.log('t2p'))
        .then(()=>resolve())
      })
      .then(res=>{
        console.log(7)
        console.log(8)
      });
    });
  }

  t1()
  t2()

  console.log('end')
}
