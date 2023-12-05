const interval = setTimeout(() => {
    console.log('executou')
}, 5000)

setTimeout(()=> {
    clearTimeout(interval)
},20000)