function showMbMenu(){
    var mbmenu = document.getElementById('mobile-menu');
    mbmenu.classList.toggle('hidden');
}

//add js when push outside the menu will also turn off.
const worksList = [
    {
        img: 'https://res.cloudinary.com/dfdwvhljw/image/upload/v1654359315/Assignment_WEB2022/work_1_f29nhj.jpg',
        name: 'Designing Dashboards',
        year: 2020,
        type: 'Dashboard',
        info: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },

    {
        img: 'https://res.cloudinary.com/dfdwvhljw/image/upload/v1654359315/Assignment_WEB2022/work_2_lnmnob.jpg',
        name: 'Vibrant Portraits of 2020',
        year: 2018,
        type: 'Illustration',
        info: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },

    {
        img: 'https://res.cloudinary.com/dfdwvhljw/image/upload/v1654359315/Assignment_WEB2022/work_3_txcd38.jpg',
        name: '36 Days of Malayalam type',
        year: 2018,
        type: 'Typography',
        info: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    
    {
      img: 'https://res.cloudinary.com/dfdwvhljw/image/upload/v1654698986/Assignment_WEB2022/Rectangle_30_esbwhi.png',
      name: 'Designing Landing pages',
      year: 2020,
      type: 'Website',
      info: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },

    {
      img: 'https://res.cloudinary.com/dfdwvhljw/image/upload/v1654698932/Assignment_WEB2022/Rectangle_40_e6rw2l.png',
      name: 'Components Design',
      year: 2018,
      type: 'Components ,Design',
      info: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    }
]

function showWorks(works){
    if(!Array.isArray(works) || works.length == 0) return false;

    let result = '';
    for(let i = 0; i < works.length; i++){
        const work = works[i];
        result +=`
        <div class='md:flex md:items-start md:w-full md:ml-3 md:border-b-2 border-purple-400 md:pb-3'>
        <div class="mt-5">
        <a href='./src/html/work_detail.html?name=${work.name}'>
        <div class="flex justify-center w-full md:w-auto md:block">
          <img class="h-[230px] md:h-[180px] md:w-[246px]" src="${work.img}" alt="" />
        </div>
        </a>
      </div>

      <!-- text work -->
      <a href='./src/html/work_detail.html?name=${work.name}'>
      <div class="pb-3 border-b-2 border-blue-200 mx-9 md:border-b-0 lg:max-w-[600px] md:max-w-[400px]">
        <h3 class="mt-3 text-2xl font-bold md:text-3xl hover:underline delay-75">${work.name}</h3>
        <div class="flex items-center mt-3">
          <p class="px-4 font-bold text-white bg-gradient-to-b from-purple-700 to-blue-900 rounded-3xl">
            ${work.year}
          </p>
          <p class="text-[#8695A4] ml-5">${work.type}</p>
        </div>
        <div class="mt-2">
          <p>
            ${work.info}
          </p>
        </div>
      </div>
      </a>
      </div>
        `
    }
    return result;
}

document.getElementById('works').innerHTML = showWorks(worksList);

// redirect blog 
document.querySelector('#blog').addEventListener('click', () => {
  window.location.href = './src/html/blog.html'
})

//redirect work
document.querySelector('#work').addEventListener('click',() => {
  window.location.href = './src/html/work.html'
})