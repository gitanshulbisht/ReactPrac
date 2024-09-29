import React from "react";

function Card(props){
    console.log("props",props)
    console.log(props.username)
    console.log(props.someObj.username)
    return(
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://imgs.search.brave.com/wWbEDngx791DtEOUBw-6rQ7rpOFu6jfwsFD9eFyW0Zk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTE3/MTI3MzkvcGhvdG8v/c29jY2VyLWJhbGwu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUFqVEl2SHk3NlRs/OFZJMWNIcldMblRp/bjJCbHpYeVN2SXVs/UkhXd21KN3M9" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    )
}

export default Card