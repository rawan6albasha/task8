import '../assets/style/host.css'

const host = [
    {
        color:'#ff8500',
        tit:'Basic',
        disc:'for very small businesses and freelancers.',
        price:'2.5',
        gift:'You will have 1 Gift',
        ul:'Disk Space: <span class="bold">500 M.B</span><br> Bandwidth: <span class="bold">500 G.B</span><br>SubDomains: <span class="bold">Unlimited</span><br>Parked Domains: <span class="bold">Unlimited</span><br>E-mail Accounts: <span class="bold">Unlimited</span><br>Cpanel (control panel):<span class="bold"> Yes</span><br> Money Back Guarantee: <span class="bold">14 Days</span><br>'
    },
    {
        color:'#a513ff',
        tit:'Pro',
        disc:'for Individuals that need sharing  vlogs or need huge portfolio.',
        price:'5',
        gift:'1 Gift per/mo for year',
        ul:'Disk Space: <span class="bold">3000 M.B</span><br>Bandwidth: <span class="bold">3 TERA</span><br>SubDomains: <span class="bold">Unlimited</span><br>Parked Domains: <span class="bold">Unlimited</span><br>E-mail Accounts: <span class="bold">Unlimited</span><br>Cpanel (control panel):<span class="bold"> Yes</span><br>Money Back Guarantee: <span class="bold">14 Days</span><br>'
    },
    {
        color:'#71aa27',
        tit:'Business',
        disc:'for Team that need sharing and reporting.',
        price:'2.5',
        gift:'3 Gifts per/mo for year',
        ul:'Disk Space: <span class="bold">5000 M.B</span><br>Bandwidth: <span class="bold">5 TERA</span><br>SubDomains: <span class="bold">Unlimited</span><br>Parked Domains: <span class="bold">Unlimited</span><br>E-mail Accounts: <span class="bold">Unlimited</span><br>Cpanel (control panel):<span class="bold"> Yes</span><br>Money Back Guarantee: <span class="bold">14 Days</span><br>'
    
    },
    {
        color:'#1d5edd',
        tit:'Enterprise',
        disc:'for large companies that need  admins & security',
        price:'2.5',
        gift:'Just Call Us',
        ul:'Disk Space: <span class="bold">10000 M.B</span><br>Bandwidth: <span class="bold">10 TERA</span><br>SubDomains: <span class="bold">Unlimited</span><br>Parked Domains: <span class="bold">Unlimited</span><br>E-mail Accounts: <span class="bold">Unlimited</span><br>Cpanel (control panel):<span class="bold"> Yes</span><br>Money Back Guarantee: <span class="bold">14 Days</span><br>'
    }
];

function Hosting() {
    return (
        <div className='host'>
          <h2 className='tit'>Hosting Pricing</h2>
          <div className='flex'>
            {host.map((item, index) => {
                const head = {
                    borderRadius: '17px 17px 0px 0px',
                    display: 'block',
                    width: '100%',
                    height: ' 37px',
                    backgroundColor: item.color,
                };


                const gift = {
                    marginTop: '16px',
                    height: '30px',
                    fontFamily: 'sans-serif',
                    fontWeight: 'bolder',
                    textAlign: 'Center',
                    display: 'block',
                    borderRadius: '10px',
                    width: '271px',
                    padding: '7px',
                    color: item.color,
                    border: '1px solid',
                    borderColor: item.color,
                };
                return (
                    <div key={index} className="hostCard">
                        <span style={head}></span>
                        <div className='cardPadding'>
                        <h3>{item.tit}</h3>
                        <p>{item.disc}</p>
                        <h2>${item.price}/mo</h2>
                        <div dangerouslySetInnerHTML={{ __html: item.ul }}></div>
                        <span style={gift}> {item.gift} </span>
                        </div>
                    </div>
                );
            })}
            </div>
            <div className='flex pa' style={{ color: '#ffffff' }}>
            <p>Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support.</p>
            <p>Go Online, choose your plan and Contact us on:contact@focal-x.com | +963 935 033 139</p>
            </div>
        </div>
    );
}

export default Hosting;
