
import './App.css';

const data=[{
  d1:"FREE",
  d2:"$0/month",
  d3:"✓ Single User",
  d4:"✓ 50 GB Storage",
  d5:"✓ Unlimited Public Projects",
  d6:"✓ Community Access",
  d7:"X Unlimited Private Projects",
  d8:"X  Dedicated Phone Support",
  d9:"X  Free Subdomain",
  d10:"X  Monthly Status Reports",
  
},
{
  d1:"PLUS",
  d2:"$9/month",
  d3:"✓ 5 Users",
  d4:"✓ 50 GB Storage",
  d5:"✓ Unlimited Public Projects",
  d6:"✓ Community Access",
  d7:"✓ Unlimited Private Projects",
  d8:"✓ Dedicated Phone Support",
  d9:"✓ Free Subdomain",
  d10:"X Monthly Status Reports",
 
},
{
 d1:"PRO",
  d2:"$49/month",
  d3:"✓ Unlimited Users",
  d4:"✓ 50 GB Storage",
  d5:"✓ Unlimited Public Projects",
  d6:"✓ Community Access",
  d7:"✓ Unlimited Private Projects",
  d8:"✓ Dedicated Phone Support",
  d9:"✓ Free Subdomain",
  d10:"✓ Monthly Status Reports", 
}
];
function App() {
  return (
    <div className="App">
      <div className='card-container'>
        {data.map((val,index)=>(
          <Pricecard  key={index} detail={val}/>
        ))}
     
    </div>
    </div>
  );
}

export default App;



function Pricecard({detail}) {
  
  return (
    <div>
    <div className='card'>
    <p className='p-element'>{detail.d1}</p>
    <h1>{detail.d2}</h1>
    <p className='p-element1'>---------------------------------------------</p>
    <div className='custom-ol-symbols'>
    <li>{detail.d3}</li>
   <li>{detail.d4}</li>
   <li>{detail.d5}</li>
   <li>{detail.d6}</li>
   <li className='gj' style={{opacity: detail.d7.includes('X') ? "0.5" :" 1",}}>{detail.d7}</li>
   <li className='gj'  style={{opacity: detail.d8.includes('X') ? "0.5" :" 1",}}>{detail.d8}</li>
   <li className='gj'  style={{opacity: detail.d9.includes('X') ? "0.5" :" 1",}}>{detail.d9}</li>
   <li className='gj'  style={{opacity: detail.d10.includes('X') ? "0.5" :" 1",}}>{detail.d10}</li>
         
   </div>
   <button className='btn'>CLICK</button>
     </div>
  </div>
   
  


    
  )
}

