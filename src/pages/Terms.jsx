import LegalPage from '../components/LegalPage'

const sections = [
  {
    heading: 'Acceptance of Terms',
    paragraphs: [
      'By accessing or using the HomeCraft website, you agree to these Terms and Conditions. If you do not agree, please do not use the website.',
    ],
  },
  {
    heading: 'Use of the Website',
    paragraphs: [
      'You may use this website for personal, non-commercial purposes. You agree not to misuse the site, attempt to disrupt its operation, or use it for any unlawful purpose.',
    ],
  },
  {
    heading: 'Intellectual Property',
    paragraphs: [
      'All content on HomeCraft, including articles, text, design and logo, is owned by HomeCraft or used with permission. You may share short excerpts with a clear link back to the original article, but you may not copy, republish or sell our content without written permission.',
    ],
  },
  {
    heading: 'Informational Purposes Only',
    paragraphs: [
      'The articles on this website are provided for general information and inspiration. They are not professional architectural, structural, electrical, safety or construction advice. For major home improvement work, please consult a qualified professional.',
    ],
  },
  {
    heading: 'External Links',
    paragraphs: [
      'Our website may link to third-party websites. We do not control and are not responsible for their content or privacy practices.',
    ],
  },
  {
    heading: 'User Messages',
    paragraphs: [
      'When you send us a message through the contact form, you confirm that the information you provide is accurate and that your message does not contain unlawful or abusive content.',
    ],
  },
  {
    heading: 'Limitation of Liability',
    paragraphs: [
      'HomeCraft is provided "as is" without warranties of any kind. To the fullest extent permitted by law, we are not liable for any loss or damage arising from your use of the website or from relying on its content.',
    ],
  },
  {
    heading: 'Changes to These Terms',
    paragraphs: [
      'We may update these Terms and Conditions at any time. Continued use of the website after changes are posted means you accept the updated terms.',
    ],
  },
  {
    heading: 'Contact Us',
    paragraphs: ['For questions about these Terms, please reach us through the Contact page.'],
  },
]

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      metaTitle="Terms & Conditions | HomeCraft"
      metaDescription="Read the HomeCraft Terms and Conditions covering website use, content ownership, disclaimers and limitation of liability."
      path="/terms-and-conditions"
      updated="November 10, 2026"
      sections={sections}
    />
  )
}