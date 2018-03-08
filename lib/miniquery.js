const SweetSelector = {
    select: function(input) {
        return document.querySelector(input)
    }
}

const DOM = {
    hide    : element => {
        document.querySelector(element).style.visibility = 'hidden'
    },
    show    : element => {
        document.querySelector(element).style.visibility = 'visible'
    },
    addClass    : (classname, element) => {
        document.querySelector(classname).classList.add(element)
    },
    removeClass : (classname, element) => {
        document.querySelector(classname).classList.remove(element)
    }
}

const EventDispatcher = {
    on: (classname, event, cb) => {
        document.querySelector(classname).addEventListener(event, cb())
    },
    trigger: (classname, event) => {
        if(event === "click") {
            EventDispatcher.on(classname, event, () => {console.log("awesome")})
        } else if(event === 'hover') {
            EventDispatcher.on(classname, event, () => {console.log("hover")})
        }
    }
}

const AjaxWrapper = (obj) => {
        const oReq = new XMLHttpRequest()
        oReq.addEventListener("load", obj.success)
        oReq.addEventListener("error", obj.fail)
        oReq.open(obj.type, obj.url, true)
        oReq.send()
}

SweetSelector.select("#eyed")
SweetSelector.select(".klass")

DOM.hide(".klass")
DOM.show(".klass")
DOM.addClass(".klass", "shadi")
DOM.removeClass(".klass", "shadi")

EventDispatcher.trigger(".klass","click")
EventDispatcher.trigger(".klass","hover")

AjaxWrapper({
  url: "https://swapi.co/api/people",
  type: 'GET',
  success: (data) => { console.log(data) },
  fail: (err) => { console.log(err)}
})

