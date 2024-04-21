
let users=[

    {
        profilePic:"https://plus.unsplash.com/premium_photo-1675034393381-7e246fc40755?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        displayPic:"https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
        pendingmessage:"4",
        location:"Kolkata,India",
        name:"Madhuban",
        age:"21",
        interests:[{
            icon:`<i class="ri-spotify-fill"></i>`,
            interest:"music"
        },{
            icon:`<i class="ri-quill-pen-fill"></i>`,
            interest:"Writting"
        }],
        bio:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a hic aliquid sit repellendus minus laborum odio! Culpa natus, debitis officiis libero molestiae laborum maiores incidunt? Non adipisci cum minus!",
        isFriend:null

    },
    {
        profilePic:"https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
        displayPic:" https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
        pendingmessage:"3",
        location:"New Delhi,India",
        name:"Ishita",
        age:"22",
        interests:[{
            icon:`<i class="ri-spotify-fill"></i>`,
            interest:"music"
        },{
            icon:`<i class="ri-quill-pen-fill"></i>`,
            interest:"Writting"
        }],
        bio:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a hic aliquid sit repellendus minus laborum odio! Culpa natus, debitis officiis libero molestiae laborum maiores incidunt? Non adipisci cum minus!",
        isFriend:null

    },
    {
        profilePic:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1618151313441-bc79b11e5090?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
        pendingmessage:"5",
        location:"Mumbai,India",
        name:"Arohi",
        age:"24",
        interests:[{
            icon:`<i class="ri-spotify-fill"></i>`,
            interest:"music"
        },{
            icon:`<i class="ri-quill-pen-fill"></i>`,
            interest:"Writting"
        }],
        bio:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a hic aliquid sit repellendus minus laborum odio! Culpa natus, debitis officiis libero molestiae laborum maiores incidunt? Non adipisci cum minus!",
        isFriend:null

    },
    {
        profilePic:"https://plus.unsplash.com/premium_photo-1683147724451-33fe3f2ad914?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://plus.unsplash.com/premium_photo-1683147858737-d64ec899a8c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingmessage:"2",
        location:"Pune,India",
        name:"Namita",
        age:"22",
        interests:[{
            icon:`<i class="ri-spotify-fill"></i>`,
            interest:"music"
        },{
            icon:`<i class="ri-quill-pen-fill"></i>`,
            interest:"Writting"
        }],
        bio:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a hic aliquid sit repellendus minus laborum odio! Culpa natus, debitis officiis libero molestiae laborum maiores incidunt? Non adipisci cum minus!",
        isFriend:null

    }
    
]


let isAnimate=false;

function select(e){
   return document.querySelector(e);
}
function setData(index){
    select(".imageprofile img").src=users[index].profilePic;
    select(".badge h5").textContent=users[index].pendingmessage;
    select(".location h3").textContent=users[index].location;
    select(".name h1:nth-child(1)").textContent=users[index].name;
    select(".name h1:nth-child(2)").textContent=users[index].age;
    let clutter="";
    users[index].interests.forEach(function(interest){
        clutter+=`<div class="tag flex items-center px-5 py-2 rounded-full bg-white/30 gap-3">
        ${interest.icon}
        <h3 class="text-sm tracking-tight">${interest.interest}</h3>
        </div>`
    })
    select(".bio p").textContent=users[index].bio;
    select(".tags").innerHTML=clutter;
}
let curr=0;
(function setInitial(){
    select(".maincard img").src=users[curr].displayPic;
    select(".incomingcard img").src=users[curr+1]?.displayPic;
    setData(curr);
    curr=2;
    
})();
function imageChange(){
    if(!isAnimate){
        isAnimate=true;
        let t1=gsap.timeline({
            onComplete:function(){
                isAnimate=false;
                let main=select(".maincard");
                let incoming=select(".incomingcard");
        
        
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");
        
        
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main,{
                    scale:1,
                    opacity:1
                })
                if(curr===users.length) curr=0;
                select(".maincard img").src=users[curr].displayPic;
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
        
        
        
            }
        });
    
t1.to(".maincard",{
    scale:1.1,
    opacity:0,
    ease:Circ,
    duration:.9
},"a")
.from(".incomingcard",{
    scale:.9,
    opacity:0,
    ease:Circ,
    duration:1.1
},"a") }
}
let deny=select(".deny");
let accept=select(".accept");
deny.addEventListener("click",function(){
   imageChange(); 
   setData(curr-1); 
   gsap.from(".details .element",{
    y:"100%",
    stagger:.06,
    ease:Power4.easeInOut,
    duration:1.5
 })
});
accept.addEventListener("click",function(){
   imageChange(); 
   setData(curr-1); 
   gsap.from(".details .element",{
    y:"100%",
    stagger:.06,
    ease:Power4.easeInOut,
    duration:1.5
 })
});


 (function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function(element){
       let div= document.createElement("div");
       div.classList.add(`${element.classList[1]}.container`,'overflow-hidden');
     div.appendChild(element);
     select(".details").appendChild(div);
    })
 })();

//  gsap.from(".details .element",{
//     y:"100%",
//     stagger:.06,
//     ease:Power4.easeInOut,
//     duration:1.5
//  })
