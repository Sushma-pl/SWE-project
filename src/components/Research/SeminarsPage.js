import React, { Component } from 'react'

import "./SeminarsPage.css";

export class SeminarsPage extends Component {
  render() {
    return (
      <div>
        <main>
          <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
          <center><h3 className="mb-3 mt-5">Seminars' List</h3></center>
          <ul className='list-seminars'>
            <li><span style={{color: 'rgb(255, 71, 71)'}}>2023-Apr-11: </span><span style={{color: '#0b22b3'}}>MS Seminar </span>by <span style={{color: '#0b22b3'}}>Nibedita Behera</span><br/><i>StarPlat: A Versatile DSL for Graph Analytics</i></li>
            <li><span style={{color: 'rgb(255, 71, 71)'}}>2023-Mar-17: </span><span style={{color: '#0b22b3'}}>MS Seminar </span>by <span style={{color: '#0b22b3'}}>Abdun Nihaal</span><br/><i>Selective Memory Compression for GPU Memory Oversubscription Management</i> <span style={{color: '#525252'}}>by Baruah et al. published in PACT 2020</span></li>
            <li><span style={{color: 'rgb(255, 71, 71)'}}>2023-Feb-10: </span><span style={{color: '#0b22b3'}}>Weekly Seminar </span>by <span style={{color: '#0b22b3'}}>Kranti Ingale</span><br/><i>Valkyrie: Leveraging inter-tlb locality to enhance gpu performance</i></li>
            <li><span style={{color: 'rgb(255, 71, 71)'}}>2022-Dec-08: </span><span style={{color: '#0b22b3'}}>MS Seminar </span>by <span style={{color: '#0b22b3'}}>Prasoon Mishra</span><br/><i>COWS for High Performance! Cost Aware Work Stealing for High</i></li>
            <li><span style={{color: 'rgb(255, 71, 71)'}}>2022-Nov-28: </span><span style={{color: '#0b22b3'}}>MS Seminar </span>by <span style={{color: '#0b22b3'}}>Aditya Agrawal</span><br/><i>UWOmpPro: Extending UWOmp++ with Point-to-Point Synchronization, Reduction, and Schedules</i></li>
            <li><span style={{color: 'rgb(255, 71, 71)'}}>2022-Nov-23: </span><span style={{color: '#0b22b3'}}>Research Proposal Seminar </span>by <span style={{color: '#0b22b3'}}>Kasaraneni Ramya</span><br/><i>A case for Combined MHP and Points-to Analysis</i></li>
            <li><span style={{color: 'rgb(255, 71, 71)'}}>2022-Nov-03: </span><span style={{color: '#0b22b3'}}>PhD Seminar </span>by <span style={{color: '#0b22b3'}}>Vimala S</span><br/><i>Pragmatic Verification of Mergeable Replicated Data Types</i></li>
            <li><span style={{color: 'rgb(255, 71, 71)'}}>2022-Oct-17: </span><span style={{color: '#0b22b3'}}>PhD Seminar </span>by <span style={{color: '#0b22b3'}}>Ashwina Kumar</span><br/><i>StarPlat: A Versatile DSL for Graph Analytics</i></li>
            <li><span style={{color: 'rgb(255, 71, 71)'}}>2022-Oct-11: </span><span style={{color: '#0b22b3'}}>PhD Seminar </span>by <span style={{color: '#0b22b3'}}>Anju M A</span><br/><i>Quickstrom: Property-based acceptance testing with LTL specifications</i> <span style={{color: '#525252'}}>by O'Connor et al. published in PLDI 2022</span></li>
            <li><span style={{color: 'rgb(255, 71, 71)'}}>2022-Sep-23: </span><span style={{color: '#0b22b3'}}>Weekly Seminar </span>by <span style={{color: '#0b22b3'}}>Divya Rathore</span><br/><i>Retrofitting Concurrency – Lessons from the Engine Room</i></li>
            <li><span style={{color: 'rgb(255, 71, 71)'}}>2022-Sep-09: </span><span style={{color: '#0b22b3'}}>Weekly Seminar </span>by <span style={{color: '#0b22b3'}}>K C Sivaramakrishnan</span><br/><i>Linear Temporal Logic</i></li>
          </ul>
        </main>
       
      </div>
    )
  }
}

export default SeminarsPage