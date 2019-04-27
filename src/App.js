import React, { Component } from 'react';
import './App.css';
import Workbook from './workbook.svg'
import Note from './components/Note';
import Chromee from './chromee.svg'
import Phone from './chrome.svg'
import Twitter from './twitter.svg'

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      noteText:'',
      notes:[],
    }
  }

  updateNoteText(noteText){
    this.setState({noteText:noteText.target.value})
    
  }
  addNote(){
    if (this.state.noteText ==='') {return}
  let notesArr=this.state.notes;
  notesArr.push(this.state.noteText);
  this.setState({noteText:''});
  this.textInput.focus();
  }

handleKeyPress =(event) =>{
  if(event.key === 'Enter'){
    let notesArr=this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({noteText:''});
  }
}

deleteNote(index){
  let notesArr=this.state.notes;
  notesArr.splice(index,1);
  this.setState({
    notes:notesArr 
  })
}

  render() {

let notes=this.state.notes.map((val,key) => {
  return <Note key={key} text={val}
  deleteMethod={()=> this.deleteNote(key)} />
})

    return (
      <div className="container">
     
      <div className="header">
<img src={Workbook} alt="beautiful" />
      <bold>My_notebook</bold>
      <div className="btnn">
      <img src={Phone} alt="call services" title="make a phone call"/>
      </div>

<a href="https://www.google.com">
      <div className="btnn">
     <img src={Chromee} alt="search online" title="search using chrome"/>
      </div>
      </a>
     <a href="https://twitter.com/login">
      <div className="btnn">
      <img src={Twitter} alt="Chat on twitter" title="twitter" />
 </div>
 </a>

      </div>
      {notes}
      <div className="btn" onClick={this.addNote.bind(this)}>Update</div>

      <input type="text"
      placeholder="Enter Activity here"
      ref={((input) =>{this.textInput= input })} 
      className="textInput"
      value={this.state.noteText}
      onChange={noteText=> this.updateNoteText(noteText)}
      onKeyPress={this.handleKeyPress.bind(this)}
      
      />
      </div>

    );
  }
}

export default App;
