import React, { Component } from "react";
import { Body, Container } from "../components/Body/Index";
import API from "../utils/API";
import fire from "../config/fire";
import moment from "moment";
import dry from "../components/Body/images/dry.png";
import { SketchField, Tools } from "react-sketch";
import ReactStickies from "react-stickies";

class Home extends Component {
  state = {
    dates: [],
    soil: "DRY",
    automated: false,
    sketchTool: Tools.Pencil,
    _id: null,
    notes: [
      {
        grid: {
          x: 0,
          y: 0,
          w: 0,
          h: 1,
          minW: 0,
          maxW: 0,
          minH: 0,
          maxH: 1,
          i: "123"
        },
        id: "123",
        title: "Note"
      }
    ]
  };

  // Component LIFE CYCLE //

  componentDidMount() {
    this.fetchNotes();
    this.getBackground();
    setInterval(this.waterPlant, 600 * 1000)
    setInterval(this.soil, 150 * 1000);
  }

  componentWillUnmount() {
    this.saveNotes();
  }

  // Component LIFE CYCLE //

  // Background Color // 

  getBackground = () => {
    API.getbackground() 
    .then((res) => {
      const backgroundColor = res.data.pop()
      document.body.style.backgroundColor = backgroundColor.color
    })
    .catch((err) => console.log(err))
  }

  saveBackground = () => {
    const obj = {
      color: document.body.style.backgroundColor 
    }

    API.savebackground(obj).catch((err) => console.log(err))
  }

  backgroundColor = (event) => {
    switch(event){
      case 'green':
      document.body.style.backgroundColor = 'rgb(196, 206, 196)'
      break;
      case 'yellow':
      document.body.style.backgroundColor = 'rgb(144, 144, 41)'
      break;
      case 'grey':
      document.body.style.backgroundColor = '#666'
      break;
      case 'pink':
      document.body.style.backgroundColor = '#eec9d2'
      break;
      default:
      document.body.style.backgroundColor = 'rgb(196, 206, 196)'
    }

    this.saveBackground()
  }

  // BackgroundColor

  
  // Sketch on Background //

  write = () => {
    this.state.sketchTool === Tools.Pencil
      ? this.setState({ sketchTool: Tools.Select })
      : this.setState({ sketchTool: Tools.Pencil });
  };

  // Sketch on Background //


  // NOTES //

  fetchNotes = () => {
    API.fetchNotes()
    .then((res) => {
      let last = res.data.pop()
      this.setState({ _id: last._id })
      for (var i=1; i < last.state.length; i++) {
        const grid = {
          grid: {
            x: last.state[i].grid.x,
            y: last.state[i].grid.y,
            w: last.state[i].grid.w,
            h: last.state[i].grid.h,
            i: last.state[i].grid.i
          },
          color: last.state[i].color,
          id: last.state[i].id,
          timeStamp: last.state[i].timeStamp,
          title: last.state[i].title,
          text: last.state[i].text
        };
        this.setState({ notes: [...this.state.notes, grid] });
      }
    })
    .catch((err) => console.log(err));
  }

  onAdd = note => {
    
    const grid = {
      grid: {
        x: note.grid.x,
        y: note.grid.y,
        w: note.grid.w,
        h: 1,
        minW: note.grid.minW,
        maxW: note.grid.maxW,
        minH: note.grid.minH,
        maxH: note.grid.maxH,
        i: note.grid.i
      },
      color: note.color,
      id: note.id,
      timeStamp: note.timeStamp,
      title: note.title
    };
    console.log(grid)
    this.setState({ notes: [...this.state.notes, grid] });
  };

  noteUpdate = () => {};

  saveNotes = () => {
    const obj = {
      state: this.state.notes
    }

    API.saveNotes(obj).catch(err => console.log(err));
  };

  onDelete = (event) => {
    const obj = {
      note: event.id,
      mongo: this.state._id
    }

    API.deleteNote(obj).catch((err) => console.log(err))
  }

  // NOTES //

  // Watering Plant //

  soil = () => {
    API.isPlantDry().then(response => {
      switch (response.data) {
        case "Plant is Dry, PLEASE WATER":
          this.setState({ soil: "DRY" });
          break;
        case "Plant is good, carry on":
          this.setState({ soil: "WET" });
          break;
        default:
          this.setState({ soil: "DRY" });
      }
    });
  };

  waterPlant = () => {
    API.waterPlant().catch(err => console.log(err));
    this.soil();

    const obj = {
      title: "Has Watered"
    };
    
    API.timeWatered(obj).catch(err => console.log(err));
  };

  getDates = () => {
    API.getDates()
      .then(({ data }) => {
        const _Dates = [];
        data.forEach(day => {
          const num = moment(day.date).format("MM-DD-YYYY");
          _Dates.push(num);
        });
        this.setState({ dates: _Dates });
      })
      .catch(err => console.log(err));
  };

  // Watering Plant //


  // Log Out //

  logOut = () => {
    fire.auth().signOut();
  };

  // Log Out //


  render() {
    let test = this.state.dates.length ? this.state.date.join("<br/>") : "";
    return (
      <Container write={this.write}>
        <Body
          logOut={this.logOut}
          color={this.backgroundColor}
          getDates={this.getDates}
          true={test}
          status={
            this.state.soil === "DRY" ? (
              <img
                style={{ width: "36px" }}
                onClick={() => this.waterPlant()}
                className="status"
                src={dry}
                alt="dry"
              />
            ) : (
              <i
                onClick={() => this.waterPlant()}
                className="fas fa-tint wet"
              />
            )
          }
        />
        <ReactStickies
          id="stickies"
          notes={this.state.notes}
          isDraggable={true}
          isResizable={true}
          onAdd={this.onAdd}
          onChange={this.noteUpdate}
          onDelete={this.onDelete}
        />
        <SketchField
          width={window.innerWidth}
          height={window.innerHeight}
          tool={this.state.sketchTool}
          lineColor="black"
          lineWidth={1}
        />
      </Container>
    );
  }
}

export default Home;