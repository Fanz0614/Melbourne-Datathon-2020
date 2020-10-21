// import React from 'react';
// import './style.css';
// //import {Graph,Pic} from './style.js';
// import {root, imgs} from '../../config.js';
// import PDF from 'react-pdf-js';
// //import { Document,Page } from 'react-pdf';
// //import {ifrmae} from 'iframe';


// class Report extends React.Component{
//     constructor(props) {
//         super(props)
//         this.state = {
//             page:1,
//             currentpage:1,
//             totalpages:8
//         }
//       }
//     lastpage(){
        
//             this.setState({
//                 currentpage:this.state.currentpage-1
//             })
        
        
//     }
//     nextpage(){
        
//             this.setState({
//                 currentpage:this.state.currentpage+1
//             })
        
        
//     }
   
//     render(){
//         return( 
//             <div>
//                 {/* <iframe
//         title="resg"
//         srcDoc={data}
//         style={{ width: '100%', border: '0px', height: '1100px' }}
//         sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
//         scrolling="auto"
//       /> */}

//              <div className='article-container'>
//                     <PDF 
//                         file={root+imgs.pdf} page={this.state.page}
//                     />
//                     <div class="btn-group" role="group" className='button'>
//                         <button type="button" class="btn btn-info" onClick={this.lastpage}>Last</button>
//                         <button type="button" class="btn btn-primary" onClick={this.nextpage}>Next</button>
//                     </div>
             

//             </div>  
//             </div>
            
//         )
//     }
    
    
// }

// export default Report;