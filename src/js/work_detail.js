// show menu 
const showMenu = function () {
    let menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

// work list 
const worksList = [
    {
        img2: 'https://res.cloudinary.com/dfdwvhljw/image/upload/v1654825120/Assignment_WEB2022/Rectangle_4_bmon9h.png',
        img1: 'https://res.cloudinary.com/dfdwvhljw/image/upload/v1654825188/Assignment_WEB2022/Rectangle_5_fbcqfu.png',
        img: 'https://res.cloudinary.com/dfdwvhljw/image/upload/v1654359315/Assignment_WEB2022/work_1_f29nhj.jpg',
        name: 'Designing Dashboards',
        year: 2020,
        type: 'Dashboard',
        info: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },

    {
        img2: 'https://res.cloudinary.com/dfdwvhljw/image/upload/v1654825120/Assignment_WEB2022/Rectangle_4_bmon9h.png',
        img1: 'https://res.cloudinary.com/dfdwvhljw/image/upload/v1654825188/Assignment_WEB2022/Rectangle_5_fbcqfu.png',
        img: 'https://res.cloudinary.com/dfdwvhljw/image/upload/v1654359315/Assignment_WEB2022/work_2_lnmnob.jpg',
        name: 'Vibrant Portraits of 2020',
        year: 2018,
        type: 'Illustration',
        info: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },

    {
        img2: 'https://res.cloudinary.com/dfdwvhljw/image/upload/v1654825120/Assignment_WEB2022/Rectangle_4_bmon9h.png',
        img1: 'https://res.cloudinary.com/dfdwvhljw/image/upload/v1654825188/Assignment_WEB2022/Rectangle_5_fbcqfu.png',
        img: 'https://res.cloudinary.com/dfdwvhljw/image/upload/v1654359315/Assignment_WEB2022/work_3_txcd38.jpg',
        name: '36 Days of Malayalam type',
        year: 2018,
        type: 'Typography',
        info: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },

    {
        img2: 'https://res.cloudinary.com/dfdwvhljw/image/upload/v1654825120/Assignment_WEB2022/Rectangle_4_bmon9h.png',
        img1: 'https://res.cloudinary.com/dfdwvhljw/image/upload/v1654825188/Assignment_WEB2022/Rectangle_5_fbcqfu.png',
        img: 'https://res.cloudinary.com/dfdwvhljw/image/upload/v1654698986/Assignment_WEB2022/Rectangle_30_esbwhi.png',
        name: 'Designing Landing pages',
        year: 2020,
        type: 'Website',
        info: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },

    {
        img2: 'https://res.cloudinary.com/dfdwvhljw/image/upload/v1654825120/Assignment_WEB2022/Rectangle_4_bmon9h.png',
        img1: 'https://res.cloudinary.com/dfdwvhljw/image/upload/v1654825188/Assignment_WEB2022/Rectangle_5_fbcqfu.png',
        img: 'https://res.cloudinary.com/dfdwvhljw/image/upload/v1654698932/Assignment_WEB2022/Rectangle_40_e6rw2l.png',
        name: 'Components Design',
        type: 'Components, Design',
        year: 2018,
        info: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    }
]

const name = new URLSearchParams(window.location.search).get('name');

function showWorks(works) {
    if (!Array.isArray(works) || works.length == 0) return false;

    let result = '';
    const work = works.find(function (item) {
        return item.name == name
    });

    result = `
    <div class="flex flex-col mx-3 mt-8 md:mx-auto md:max-w-4xl">
    <div class="header">
      <h3 class="text-3xl font-bold md:text-[34px]">
        ${work.name}
      </h3>
    </div>

    <div class="flex mt-8">
      <p class="px-2 text-white bg-purple-600 rounded-xl max-h-7">${work.year}</p>
      <p class="pl-5 ml-5 text-lg">${work.type}</p>
    </div>

    <div class="mt-9">
      <p>
        ${work.info}
      </p>
    </div>

    <img class="mt-3"
      src="${work.img}"
      alt="" />

    <div class="">
      <h3 class="mt-5 text-3xl font-medium">Heading 1</h3>
      <h4 class="mt-4 text-2xl font-medium">Heading 2</h4>
      <p class="mt-4">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </div>

    <img class="mt-3"
      src="${work.img1}"
      alt="" />

      <p class="my-4">
      ${work.info}.
    </p>

    <img class="mt-3"
      src="${work.img2}"
      alt="" />

    <p class="mt-4">
      ${work.info}.
    </p>
  </div>

    `
    return result;
}

document.getElementById('works').innerHTML = showWorks(worksList);