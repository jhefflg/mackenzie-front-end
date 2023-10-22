import { Section } from "@/app/components/Section";

import { Title } from "@/app/components/Title";
import { Nav } from "@/app/components/Nav";

export default function Home() {
  const [head, ...tail] = data;

  return (
    <main className="lg:px-3 flex flex-col lg:py-6">
      <div className="h-[90rem] sm:h-[70rem] lg:h-[50rem] xl:h-auto">
        <div className="flex flex-col bg-red-500 px-7 lg:rounded-3xl lg:px-20 lg:mb-16 mb-auto h-[44rem] xl:h-auto">
          <Nav />
          <div className="p-0 -mb-96 lg:-mb-16">
            <div className="flex flex-row flex-wrap justify-center items-center mb-9 xl:mt-3">
              <Title
                title="nossa"
                styleClass="uppercase text-white text-6xl lg:text-slate-950"
              />
              <Title
                title="identidade"
                styleClass="ml-2 text-white uppercase text-6xl"
              />
            </div>
            <Section
              isHeader={true}
              src={head?.src}
              title={
                <div className="flex flex-wrap lg:hidden">
                  <Title title="Mais de " styleClass="text-slate-950" />
                  <Title title="150 anos" styleClass="mx-4 text-red-500" />
                  <Title title="de história" styleClass="text-slate-950" />
                </div>
              }
              textMobile={head?.text}
              textDesktop={head?.text}
              btn={
                <button className="text-red-500 lg:text-white lg:border py-2 px-16 text-lg mt-3 uppercase font-semibold">
                  {head?.buttonText}
                </button>
              }
              classCustom="flex-col lg:flex-row lg:col-start-1 lg:col-end-3 lg:flex-row"
            />
          </div>
        </div>
      </div>
      <div className="px-16 grid lg:gap-2 lg:grid-cols-2 justify-center">
        {tail?.map((item, index) => (
            <Section
              key={index}
              src={item?.src}
              title={
                item?.id === 4 ? (
                  <div className="flex">
                    <Title title="Histórico do" styleClass="text-slate-950" />
                    <Title title="SME" styleClass="ml-4 text-red-500" />
                  </div>
                ) : (
                  item?.title
                )
              }
              btn={
                <button className="text-end text-red-500 font-semibold text-lg mt-3 uppercase">
                  {item?.buttonText}
                </button>
              }
              classCustom={item?.classCustom}
              textDesktop={item?.textDesktop}
              textMobile={item?.textMobile}
            />
        ))}
      </div>
    </main>
  );
}

const data = [
  {
    id: 1,
    title: "",
    src: "/image000.png",
    buttonText: "saiba mais",
    text: "Com mais de 150 anos de história, o Mackenzie é uma instituição educacional pioneira, agente de inovações pedagógicas. Comprometimento com valores e princípios cristãos, o Instituto busca formar cidadãos capazes de discernir, realizar uma leitura do mundo e intervir na sociedade.",
  },
  {
    aid: 2,
    title: "",
    src: "/image001.png",
    classCustom: "flex-col lg:order-1",
    textDesktop:
      "O Sistema Mackenzie de Ensino trabalha para fornecer uma pedagogia cristã, com materiais e recursos didáticos, que conduza essa geração a gloria de Deus por meio de uma atuação biblicamente orientada, social e culturamente relevante.",
    textMobile:
      "Nós, o Sistema de ensino Mackenzie, somos líderes na oferta de uma proposta educaciuonal sustentada pela tradição. Com materiais didáticos e soluções didático-pedagógicas, atendemos mais de 400 escolas, incluindo unidades próprias e parceiras. Destacamos-mnos como o sistema de ensino cristão mais relevante academicamente no país, baseado em uma cosmovisão bíblica.",
  },
  {
    id: 3,
    title: "",
    src: "/image002.png",
    textDesktop:
      "O Sistema Mackenzie de Ensino é lider na oferta de uma proposta educacional sustentada pela tradição cristã. Com materiais didáticos e soluções pedagógicas, atendemos mais de 400 escolas, incluindo unidades próprias e parceiras. Destacamos-nos como o primeiro sistema de ensino cristão e o mais relevante academicamente no país.",
    textMobile:
      "Nós, o Sistema de ensino Mackenzie, oferecemos uma proposta educacional abrangente, com materiais didádicos e soluções pedagógicas, atendendo a mais de escolas. Somos reconhecidos com o sistemade ensino cristão de maior relevância acadêmica do país, fundamentado em uma cosmovisão bíblica.",
    classCustom: "flex-col lg:flex-col-reverse",
  },

  {
    id: 4,
    title: "Histórico do SME",
    src: "/image003.png",
    classCustom:
      "flex-col lg:flex-row lg:col-start-1 lg:col-end-3 lg:flex-row-reverse lg:order-3",
    buttonText: "saiba mais",
    textDesktop:
      "Desenvolvemos um modelo de predagógico alinhado com a a filosofia cristã e o entendimento de que todo conhecimento provém de Deus e é o ponto convergente de todo reciocínio.",
    textMobile:
      "Os sistemas de ensino Mackenzie traduzem os princípios esseciais de um ensino-aprendizagem de excelência em materiais didáticos e soluções pedagógicas para professores e alunos. Nosso Modelo Pedagógico se baseia em uma visão integrada dos conhecimentos, em um processo de ensino-aprendizagem interativo e significativo, e em uma metodologia reflexiva que promove a compreensão do ensino, realizado com personalização sem deixar de promover uma aprendizagem colaborativa à luz da cosmovisão cristã. Se você compartilha essa abordagem educacional, junte-se a nós nessa jornada!",
  },
];
