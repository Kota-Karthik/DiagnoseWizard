const ConnectWithUs = (props) => {
    
    return (
        <section className="py-[100px]" id="ConnectWithUs" ref={props.ConnectWithUsSection}>
           <div className="flex text-start justify-between">
           <div className="w-[464px]">
                <p className="font-bold text-[12px] font-bold text-[#09A4AD]">
                    Connect With Us
                </p>
                <h1 className="font-bold text-[40px] mb-[40px]">
                 Connect with DiagnoseWizard, Take a step towards prevention
                </h1>
                <p className="font-medium text-[20px]">
                    Far far away, behind the word mountains, far from the countries Waganda and Asgard.
                </p>
            </div>
            <div className=" w-[475px] shadow-lg px-[35px] py-[20px] rounded-lg">
                <input type="text" placeholder="Name" className="w-[400px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]"/>
      
                <input type="text" placeholder="Message" className="w-[400px] h-[150px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]" />
                <button className="w-[400px] h-[50px] bg-[#18A0A9] text-[#FFFFFF] rounded-xl my-[10px] ">Submit Now</button>
            </div>
           </div>
        </section>
    );
}

export default ConnectWithUs;