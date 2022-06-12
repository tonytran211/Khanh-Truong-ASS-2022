const showMenu = function () {
    let mobile_menu = document.getElementById("menu");
    mobile_menu.classList.toggle("hidden");
};

const blogList = [
    {
        name: "UI Interactions of the week",
        time: "11 Feb 2019",
        type: "Express, Handlebars",
        content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        name: "UI Interactions of the week",
        time: "12 Feb 2019",
        type: "Express, Handlebars",
        content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        name: "UI Interactions of the week",
        time: "13 Feb 2019",
        type: "Express, Handlebars",
        content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        name: "UI Interactions of the week",
        time: "14 Feb 2019",
        type: "Express, Handlebars",
        content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
];

let showBlog = function (blogs) {
    if (!Array.isArray(blogs) || blogs.length == 0) return false;

    let result = "";
    for (let i = 0; i < blogs.length; i++) {
        let blog = blogs[i];
        result += `
        <div class="mt-5 md:max-w-3xl">
        <h3 class="text-[26px] font-medium md:text-3xl">${blog.name}</h3>
        <div class="flex mt-3 leading-3">
            <p class="pr-5 border-r-2 border-black">${blog.time}</p>
            <p class="pl-5">${blog.type}</p>
        </div>
        <p class="pb-6 mt-4 border-b-2 border-purple-400">${blog.content}</p>
    </div>
        `;
    }
    return result;
};

document.getElementById('blogs').innerHTML = showBlog(blogList);

// redirect home 
document.querySelector('#home').addEventListener('click', function() {
    window.location.href = '../html/index.html';
});

// redirect work 
document.querySelector('#works').addEventListener('click',() => {
    window.location.href = '../html/work.html'
})
