import { FeatureCard } from "./FeatureCard";
import { Shield, Globe, Clock } from "lucide-react";

export const AdditionalFeatures: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={Shield}
          title="Secure Access"
          description="Bank-grade security protecting your virtual card details"
        />
        <FeatureCard
          icon={Globe}
          title="Global Acceptance"
          description="Use your virtual card anywhere Mastercard is accepted"
        />
        <FeatureCard
          icon={Clock}
          title="Real-time Updates"
          description="Track transactions and balance updates instantly"
        />
      </div>
    </div>
  );
};
