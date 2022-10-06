let myLeads =  []
let oldLead=[]
//  myLeads=JSON.stringify(myLeads)
// // myLeads.push("www.google.com")
// console.log(typeof myLeads)


//let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const uiEl = document.getElementById("ui-el")
const deletebtn=document.getElementById("delete-btn")
const  LeadsfromlocalStorage=JSON.parse(localStorage.getItem("myLeads"))
 const tabBtn=document.getElementById("tab-btn")
 //1 check if leadsstorage is truthy 
 //2 if so set my leads to its value and call renderleads
 if(LeadsfromlocalStorage){
     myLeads=LeadsfromlocalStorage
     render(myLeads)
 }


// listen fir clicks on tabbtn.log google.com
tabBtn.addEventListener("click",function(){
    //console.log(tabs[0].url)
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads) )
        render(myLeads)
    })
//   myLeads.push(tabs[0].url)
//      localStorage.setItem("myLeads",JSON.stringify(myLeads) )
//      render(myLeads)
    })
//render the function 
 function render(Leads) {
    let listItems = ""
    for (let i = 0; i <Leads.length; i++) {
        // listItems += "<li><a target='_blank' href='"+myLeads[i]+"'>" + myLeads[i] + "</li></a>" 
    listItems+=`
    <li>
        <a target='_blank' href='${Leads[i]}'>
            ${Leads[i]}
        </a>
    </li>`
    }


    uiEl.innerHTML = listItems
}

deletebtn.addEventListener("click",function(){
    localStorage.clear()
    myLeads=[]
    alert("Do You  Really Want To Delete")
    render(myLeads)
})
inputBtn.addEventListener("click", function () {

    // push the value "ww.google.com" to myarray when input button is clicked
    myLeads.push(inputEl.value)
    //clear out input field
    inputEl.value=""
    //saving my leads array to localstorage
    //ps:remember json.stringfy
   localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    //to verify it work
  ///console.log(localStorage.getItem("myLeads"))

})
  