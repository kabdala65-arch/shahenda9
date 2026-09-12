import { motion } from 'framer-motion'
import './MessageSection.css'

export default function MessageSection() {
  return (
    <section className="message-section">
      <motion.div
        className="message-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="ring-glow-wrapper">
          <div className="ring-glow">
            <span className="ring-heart">♥</span>
          </div>
        </div>

        <h2 className="message-title">
          <span className="message-lead">يا أغلى إنسانة في حياتي...</span>
          <span className="signature">شاهندا ❤️</span>
        </h2>

        <motion.p
          className="message-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          الكلام مهما اتقال يفضل قاصر عن وصف حجم حبي ليكي، بس حبيت أعملّك المكان ده عشان تحسّي قد إيه انتي غالية عليّا.<br /><br />
          من 2/11/2025 وأنا كل يوم بحبك أكتر من اللي قبله، وباكتشف فيكي حاجة جديدة تستاهل الحب.
          ضحكتك بتنوّر يومي، وكلامك بيطمّني، وأي تعب بيهون عليّا بمجرد ما أسمع صوتك.<br /><br />
          ولو الزمن يرجع تاني مليون مرة، هختارك انتي بس، من غير ما أفكر لحظة.<br /><br />
          وعدي ليكي: هفضل جنبك، هحترمك وأقدّرك، وهكون معاكي في كل حال،
          في الأيام الحلوة والصعبة، وربنا يخليكي ليا ويديم المحبة بينا.</motion.p>

        <motion.div
          className="message-signature-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />

        <motion.p
          className="message-from"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          بحبك يا شاهندا بجد، وربنا يخليكي ليا ويملا حياتك بالضحك والسعادة طول عمرك ❤️🌹
        </motion.p>
      </motion.div>
    </section>
  )
}
