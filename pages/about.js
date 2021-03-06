import Header from "@/components/molecule/Header";
import { styles } from "@/public/js/styles";

const pargraphs = [
  "تقي بن حسين الموسوي عماني وقد ولد في زنجبار شرق أفريقيا في عام 1936 ميلادي. وفي 1939 في بداية الحرب العالمية الثانية جاء الى مسقط في سلطنة عمان.",
  "نشأ وتربى في مطرح في سلطنة عمان ودرس في المدارس الغير النظامية – المدارس النظامية لم تتواجد في تلك الأيام.",
  "درس علوم الحوزة العلمية عند والده السيد حسين العالم لمدة ثلاث سنوات والتي كانت تحتوي على العلوم العربية من علم الإشتقاق وعلم الصرف وعلم النحو وغيرها وكذلك المنطق والفلسفة والفقه وغيرها.",
  "قرأ الكثير من الكتب في العرفان والفقه والفلسفة والمنطق والتاريخ وعلم النفس وغيره في مكتبة والده المرحوم السيد حسين العالم الزاخرة. وقرأ الكثير وحفظ من الشعر العربي وتذوقه.",
  "في عام 1953 سافر الى الكويت وعمل فيها ، وفي نفس الوقت درس الرياضيات في جامعة لندن بالمراسلة بعد ما درس هناك الشهادات المؤهلة لدخول الجامعة في الرياضيات النظرية والتطبيقية والفيزياء والكيمياء واللغة العربية والمحاسبة والتاريخ الإسلامي.",
  "درس الكثير من المناهج الخاصة من لندن والقاهرة ، ومنها دروس فائق الجوهري من القاهرة.",
  "في الكويت قرأ الكثير من الكتب في الإقتصاد والتاريخ والعلوم وعلم النفس خاصة – حوالي 500 كتاب.",
  "سافر الى ايران في عام 1967 حيث عمل هناك مديرا للشئون المالية وفي نفس الوقت درس الأدب الفارسي وعلوم الترجمة في كلية الآداب في جامعة طهران.",
  "درس اللغة الألمانية في طهران في مؤسسة جوته ثم أرسلته شركته الى ألمانيا في دورة تدريبية عملية في اللغة الألمانية.",
  "وفي ريف طهران تسمى حصارك درس العرفان الإسلامي النظري وتربى في العرفان الإسلامي العملي على يد الشيخ الفقيد صادق العنقا قدس سره الشريف لمدة 12 عاما في الطريقة الأويسية – تنسب الى العارف بالله أويس القرني الذي مدحه ومجده الرسول الأكرم ص في عدة مناسبات رغم أنه لم يره.",
  "عاد في عام 1987 الى مسقط رأسه سلطنة عمان حيث عمل كمدير عام في إحدى الشركات الرائدة. وفي نفس الوقت كان يحاضر في العرفان.",
  "ألف كتبا كثيرة في العرفان باللغة العربية وكذلك باللغات الإنكليزية والفارسية.",
  "متضلع في لغات عدة وعلى الأخص اللغات العربية والإنكليزية والفارسية والسندية.",
  "كتبه باللغتين الإنكليزية والفارسية لا تظهر على هذا الموقع."
];

export default function About() {
  return (
    <>
      <Header active={"about"} />
      <div className="aboutContainer">
        <div className="line"></div>
        <h1>عن المؤلف</h1>
        <div>
          <div className="tcenter">بسم الله الرحمن الرحيم</div>
          <div className="tcenter">السيرة الذاتية لسيد تقي بن السيد</div>
          {pargraphs.map((p, i) => (
            <div key={i} className="pargraph">
              {p}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .line {
          border-top: 3px solid ${styles.primaryColor};
          width: 6rem;
          padding: 0.5rem;
        }
        .aboutContainer {
          padding: 10vw 1.6rem;
          font-size: 1.2rem;
          max-width: 60rem;
          margin: auto;
        }

        .tcenter {
          text-align: center;
          padding: 1rem 0rem;
        }
        .pargraph {
          padding: 1rem 0rem;
          text-align: justify;
          text-justify: inter-word;
        }
      `}</style>
    </>
  );
}
