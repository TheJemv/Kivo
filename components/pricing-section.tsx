import { PricingDevSection } from './pricing-dev-section';
import { PricingBusinessSection } from './pricing-business-section';

export function PricingSection() {
   return (
      <section>
         <PricingDevSection />
         <PricingBusinessSection />
      </section>
   );
}
