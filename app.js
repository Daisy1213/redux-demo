import express from 'express';

const app = express();

const list = ['张伟', '王伟', '王芳', '李伟', '李娜', '张敏', '李静', '王静', '刘伟', '王秀英', 'Hiroto', 'Shota', 'Ren', 'Sota', 'Sora', 'Yuto', 'Yudo', 'Yuma', 'Eita', 'Sho'];

const getRandomName = ()=> {
  let idx = parseInt(Math.random() * (list.length));
  return list[idx];
};

app.use(express.static('public'));

app.get('/todos', (req, res)=> {
  setTimeout(()=> {
    res.send([{
      text: getRandomName(),
      completed: false
    }, {
      text: getRandomName(),
      completed: true
    }])
  }, 1000);
});

app.listen(3000, ()=> {
  console.log('Server start at http://localhost:3000');
});