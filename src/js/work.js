// on-off menu 
const showMenu = function(){
    let menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

// worklist 
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
      info: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    }
]

function showWorks(works){
    if(!Array.isArray(works) || works.length == 0) return false;

    let result = '';
    for (let i = 0; i < works.length; i++){
        let work = works[i];
        result += `
        <div class="grid grid-cols-1 grid-rows-[230px_auto] mx-3 work md:grid-cols-[246px_auto] md:grid-rows-1 gap-y-12">
        <a href='../html/work_detail.html?name=${work.name}'>
        <img
          src="${work.img}"
          alt=""
          class="w-full md:mb-8"
        />
        </a>
        
        <a href='../html/work_detail.html?name=${work.name}'>
        <div class="md:mx-6">
          <h3 class="text-2xl font-bold md:text-3xl md:hover:underline">${work.name}</h3>
          <div class="flex items-center mt-4">
            <p class="px-3 mr-5 text-white bg-purple-600 rounded-2xl">${work.year}</p>
            <p class="pl-5 text-gray-400 border-l-2 border-black">${work.type}</p>
          </div>
          <p class="mt-3 mb-6">
            ${work.info}
          </p>
        </div>
        </a>
      </div>
        `
    }
    return result;
}

document.getElementById('works').innerHTML = showWorks(worksList);

// redirect to blog 
document.querySelector('#blog').addEventListener('click',() => {
    window.location.href = '../html/blog.html'
})

//back to home
document.querySelector('#home').addEventListener('click',() => {
  window.location.href = '../../index.html'
})