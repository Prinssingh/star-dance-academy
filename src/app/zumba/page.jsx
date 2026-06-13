import WhatIsZumba from "../../components/zumba/WhatIsZumba";
import ZumbaBenefits from "../../components/zumba/ZumbaBenefits";
import ZumbaClassTimings from "../../components/zumba/ZumbaClassTimings";
import ZumbaGallery from "../../components/zumba/ZumbaGallery";

import ZumbaHeroSection from "../../components/zumba/ZumbaHeroSection";
import CTASection from "../../components/CTASection";

function Zumba() {
  return (
    <div>
      <ZumbaHeroSection />

      <WhatIsZumba />
      <ZumbaBenefits />
      <ZumbaClassTimings />
      <ZumbaGallery />
     
      <CTASection
        heading="Ready to Join Our "
        subtext="Join our vibrant community and transform your passion into rhythm.
              From classical dance to energetic Zumba and unforgettable wedding
              choreography – your perfect dance experience awaits."
      />
    </div>
  );
}

export default Zumba;
