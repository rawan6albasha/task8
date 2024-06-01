
import '../assets/style/services.css';

let Service = [{
  tit: "Branding",
  Definition: "<span>The brand is hope,</span> <br/>It is also the source of inspiration for everything you do when you deal with your customers and that is the important and emotional thing <span className='bold'> . Your Brand and Visual identity </span> represents an intrinsic Value to your company.",
  provid: "In focal X agency, we provide:",
  ul: " Visual identity design.<br>Define Brand Identity.<br> Define Brand personality.<br> Building Your brand strategy.<br> Market research and competitors study.<br>",
  fotter: "We walk with you from A to Z."
  ,color:"#ff8500"
  ,src:"https://www.focal-x.com/assets/img/ourservices/brandingOrange.png"
},
{
  tit: "Marketing",
  Definition: "Talk to your customers and tell them <span class='bold'> you and your company's</span> <br>story through us the way you want.<br> Let us plan the content that will bring your audience closer to you."

  , provid: "In our marketing agency, we provide:",
  ul: "<span>E-mail marketing.</span><br><span>Affiliate marketing.</span> <br><span>Influencer marketing.</span> <br><span>Market research and Analysis.</span> <br><span>App store optimization ( ASO ).</span> <br><span>Search engine Marketing ( SEM ).</span> <br><span>Search engine optimization ( SEO ).</span> <br><span>Social media marketing &amp; campaigns.</span> <br>"
  ,fotter: ""
  ,color:"#a513ff"
  ,src:"/src/assets/img/markiting.png"
}





];

function Services() {
  return (
    <div className='service'>
      <h2 style={{ textAlign: 'center' }}>Our Services</h2>
<div className='flex'>
      {Service.map((item, index) => {
        
        const h1Style = {
          fontSize: '30px',
    position: 'relative',
    marginBottom: '19px',
        };

        const afterStyle = {    content: "",
    position: 'absolute',
    width: '144px',
    backgroundColor: item.color,
    height: '3px',
    left: '0px',
    bottom: '-10px',
        };

        return (
          <div key={index} className="cardSe">
            {/* <img src="https://www.focal-x.com/assets/img/ourservices/brandingpattren.png" alt="" className="pattren"/> */}
            <div>
            <h1 style={h1Style}>
                {item.tit}
                <span style={afterStyle}></span>
              </h1>
              <p className="Definition" dangerouslySetInnerHTML={{ __html: item.Definition }}></p>
              <p className="provid">{item.provid}</p>
              <ul className="ul" dangerouslySetInnerHTML={{ __html: item.ul }}></ul>
              <p className="fotter">{item.fotter}</p>
            </div>
            <img className='img' src={item.src} alt="" />
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Services;
