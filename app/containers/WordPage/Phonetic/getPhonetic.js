import $ from 'jquery';
function getPhonetic(word) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'http://zhouzhongyuan.com:3000/translator',
      type: 'get',
      data: {
        word,
      },
      success(data) {
        resolve(data);
      },
      error(err) {
        resolve('未获得');
                // reject(err);
      },
    });
  });
}

export default getPhonetic;

