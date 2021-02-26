
import React from 'react'
/**
 * Growth Voshin
 */
const Belts=[
    {
            name:"Beginner 0", level:0.5,nbr:0
    },
    {
        name:"Beginner 1", level:1,nbr:0
    },
    {
        name:"Beginner 2", level:2,nbr:0
    },
    {
        name:"Beginner 3", level:3,nbr:0
    },
    {
        name:"DAN 0", level:4,nbr:0
    },
    {
        name:"DAN 1", level:5,nbr:0
    },
    {
        name:"DAN 2", level:6,nbr:0
    },
    {
        name:"DAN 3", level:7,nbr:0
    },
    {
        name:"MASTER", level:8,nbr:0
    },
]
class Game extends React.Component {

constructor(props) {
    super(props);

    this.state = {years:0,level:0,nbr:0
    }
    this.onIncrement=this.onIncrement.bind(this);;
}

    render() {
        return <div>
            <div className="level">
                <h2>{this.state.years}</h2>
                <button className="levelBtn"onClick={this.onIncrement}><h2>Earn a level</h2></button>
            </div>
            <hr />
        <div>
          <h3>Team's Than Long</h3>
          {Belts.map((item, idx) => (
            <div>
              {`${item.name}: ${item.level} - number of participants: ${item.nbr} `}
              <br />
            </div>
          ))}
        </div>
        <hr />
            <div>
                <h3>Level's Than Long</h3>
                {Belts.map((item, idx) => (
            <button key={item.name }  onClick={() => this.aquireAlevel(idx)}>
              {`${item.name}`}
            </button>
          ))}
            </div>
        </div>;
    }
    onIncrement()
    {
        this.setState({years:this.state.years+1,})
    }
    aquireAlevel = idx => {
        const { years,level,nbr } = this.state;
        const y = Belts[idx];
    
        if (years < y.level) return;
    
        this.setState({
          years: years - y.level,
         level: level + y.level,
         nbr:y.nbr,
          Belts: Belts.map((item, index) =>
            index !== idx
              ? item
              : {...item,  nbr: item.nbr + 1 }
          )
        });
      };
}



export default Game;