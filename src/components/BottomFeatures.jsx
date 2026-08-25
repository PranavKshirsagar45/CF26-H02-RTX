import {
  ShieldCheck,
  LockKeyhole,
  Headphones,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Secure & Private",
    description: "Your health data is protected",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Data Protection",
    description: "Your records stay confidential",
    icon: LockKeyhole,
  },
  {
    id: 3,
    title: "24/7 Support",
    description: "We're always here to help",
    icon: Headphones,
  },
];

function BottomFeatures() {
  return (
    <section className="bottom-features">

      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <div
            className="bottom-feature"
            key={feature.id}
          >

            {/* Icon */}

            <div className="bottom-icon">

              <Icon
                size={17}
                strokeWidth={2}
              />

            </div>

            {/* Content */}

            <div>

              <strong>
                {feature.title}
              </strong>

              <span>
                {feature.description}
              </span>

            </div>

          </div>
        );
      })}

    </section>
  );
}

export default BottomFeatures;