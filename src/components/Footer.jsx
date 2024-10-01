import logo from '../assets/logo.png';

export function Footer() {
  return (
    <div className="px-4 py-8 md:px-16 md:py-12 bg-[#1c1a1f]">
     
      <div className="flex flex-col md:flex-row justify-between text-white items-center md:px-8 md:py-6 gap-6">
        <div className="w-full md:w-[20rem] font-bold text-2xl text-center md:text-left">
          Your business partner to increase the level.
        </div>
        <div className="w-[15rem] md:w-auto px-6 py-3 bg-[#4f4bb3] rounded-full text-center">
          <button className="flex justify-center gap-3 items-center ">
            <div>Register here for free</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </button>
        </div>
      </div>

    
      <div className="bg-[#2c282f] p-6 md:p-12 rounded-2xl mt-6">
        <div className="flex flex-col gap-[2rem] md:flex-row justify-between items-start md:items-center md:gap-[20rem]">
         
          <div className="w-full md:w-[13rem]">
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-8 h-8" />
              <label className="text-xl font-semibold text-white">Foxyline</label>
            </div>
            <div className="text-[#817f82] text-sm mt-3">
              One non-stop solution to solve all your business problems.
            </div>
            <div className="flex gap-4 mt-4">
             
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-twitter-x" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.17H6.535c.032.625 0 7.224 0 7.224h2.401z" />
              </svg>
            </div>
          </div>

       
          <div className="  flex-1  text-[#817f82]  text-sm grid grid-cols-3 md:grid-cols-3 gap-[2rem] md:gap-1">
            <div className=''>
              <div className="font-semibold  text-white mb-4">Community</div>
              <div>Company</div>
              <div>Career</div>
              <div>Insights</div>
              <div>Users</div>
            </div>
            <div>
              <div className="font-semibold text-white mb-4">Product</div>
              <div>Features</div>
              <div>Why us?</div>
              <div>Request a Demo</div>
              <div>Pricing</div>
            </div>
            <div>
              <div className="font-semibold text-white mb-4">Support</div>
              <div>Help Center</div>
              <div>Contact Us</div>
              <div>Feedback</div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="mt-8 border-t border-[#403e42] pt-4 text-center text-[#817f82] text-sm">
        <div>&copy; 2023 Foxyline. All Rights Reserved.</div>
      </div>
    </div>
  );
}
