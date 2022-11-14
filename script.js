class Message{
    constructor(name, message) {
        this.name = name;
        this.date=Date.now();
        this.message = message;
      }
    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }
      toString(){
        return(`Gonderen: ${this.name}, Mesaj: ${this.message}, Vaxt: ${this.gettime()}`)
      }
}
class Messenger{
    list=[];
    send(name,message){
        let newmessage=new Message(name,message)
        this.list.push(newmessage)
    };
    show_history(){
        this.list.forEach(message=>{
            console.log(message.toString())
        })
    }
}

let messenger = new Messenger()
messenger.send('Qadir', 'first message')
messenger.send('Vusal', 'second message')
messenger.show_history()