import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { User, X, Mail } from "lucide-react";

interface QuickIntroProps {
  portraitUrl?: string;
}

const QuickIntro = ({
  portraitUrl = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop",
}: QuickIntroProps) => {
  const [showBio, setShowBio] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div className="space-y-12">
        <div className="space-y-6">
          <p className="text-gray-600">
            Votre performance business décollera en formant vos équipes à la
            culture et la pédagogie. Bien vieillir nécessite un apprentissage
            pour tous.
          </p>

          <p className="text-gray-600">
            Vous, vos clients, vos salariés, vos étudiants: nous sommes tous
            concernés par ces mots et cet avenir. À travers des conférences, des
            ateliers et des formations, je vous invite à apprivoiser, à mieux
            comprendre, à mieux vivre ces passages.
          </p>

          <p className="text-gray-900 font-medium">
            Mieux écouter pour conseiller de manière éclairée puis vendre en
            sécurité éthique et émotionnelle.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-xl"
        >
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            Contactez-moi
          </h3>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">
              Nom *
            </Label>
            <Input
              id="name"
              required
              className="border-gray-200"
              placeholder="Votre nom"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Adresse email *
            </Label>
            <Input
              id="email"
              type="email"
              required
              className="border-gray-200"
              placeholder="votre@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-700">
              Message *
            </Label>
            <Textarea
              id="message"
              required
              className="border-gray-200 min-h-[100px]"
              placeholder="Votre message..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gray-900 hover:bg-gray-800 text-white"
          >
            <Mail className="mr-2 h-4 w-4" />
            Envoyer le message
          </Button>
        </form>
      </div>

      <div className="relative h-[800px]">
        <img
          src={portraitUrl}
          alt="Portrait"
          className="w-full h-full object-cover rounded-xl"
        />
        {!showBio && (
          <Button
            variant="secondary"
            className="absolute bottom-4 left-4 bg-white/90 hover:bg-white"
            onClick={() => setShowBio(true)}
          >
            <User className="mr-2 h-4 w-4" />
            Qui suis-je ?
          </Button>
        )}

        {showBio && (
          <div className="absolute inset-0 bg-black/90 rounded-xl p-8 overflow-y-auto">
            <Button
              variant="ghost"
              className="absolute top-2 right-2 text-white hover:bg-white/10"
              onClick={() => setShowBio(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="space-y-6 text-white">
              <p className="text-xl font-medium">
                Dans une vie il y a des vies.
              </p>
              <p>
                Pour se rendre d'une vie à l'autre n'est-il pas rassurant de s'y
                préparer ?
              </p>
              <p>
                Cette réflexion est devenue au fil des années, pour moi, une
                nécessité que j'ai enrichie de connaissances et d'expériences.
              </p>
              <p>
                Il y a 20 ans, j'ai introduit en France le métier de funeral
                planner, en soutien aux familles endeuillées dans l'organisation
                logistique des hommages aux défunts. Il y a 15 ans, j'ai rejoint
                les assurances de personnes pour sensibiliser un plus grand
                nombres d'acteurs à la prévention funéraire sous forme de récit
                de vie et de transmission.
              </p>
              <p>
                J'ai poursuivi en travaillant auprès des personnes en fin de vie
                et des personnes âgées dépendantes en maison de retraite
                (Ehpad). Les années passées auprès du grand âge, de la
                vieillesse et des retraités me persuadent de l'importance de se
                préparer aux étapes incontournables de cette échéance.
              </p>
              <p>
                Egalement diplômée d'un master en droit de la santé, j'ai acquis
                des expertises sur les thématiques de gérontologie. J'interviens
                lors d'ateliers, des conférences et de formations. J'apporte une
                sensibilisation pédagogique, illustrée et décomplexée sur ces
                sujets encore tabous qui déterminent pourtant notre art du bien
                vieillir.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickIntro;
