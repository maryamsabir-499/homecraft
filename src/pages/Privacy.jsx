import LegalPage from '../components/LegalPage'

const sections = [
  {
    heading: 'Introduction',
    paragraphs: [
      'HomeCraft respects your privacy. This Privacy Policy explains what information we collect when you visit our website, how we use it and the choices you have.',
    ],
  },
  {
    heading: 'Information We Collect',
    paragraphs: ['We collect only the information needed to run the website and respond to you:'],
    list: [
      'Information you provide: your name, email address and message when you use our contact form.',
      'Technical information: basic data such as browser type, device type and pages visited, which may be collected automatically when you browse the site.',
    ],
  },
  {
    heading: 'How We Use Your Information',
    list: [
      'To reply to your questions and messages.',
      'To maintain, secure and improve the website and its content.',
      'To understand which articles are most useful to our readers.',
    ],
  },
  {
    heading: 'Cookies',
    paragraphs: [
      'Our website may use cookies or similar technologies to keep the site working properly and to understand how it is used. You can control or delete cookies at any time through your browser settings.',
    ],
  },
  {
    heading: 'Third-Party Services',
    paragraphs: [
      'We use trusted third-party services to operate the website, such as website hosting, a form service that delivers contact form messages to us, and font providers. These services may process limited data according to their own privacy policies. We do not sell your personal information.',
    ],
  },
  {
    heading: 'Data Retention and Security',
    paragraphs: [
      'We keep contact messages only as long as needed to respond to you and for reasonable record keeping. We take sensible steps to protect your information, but no method of transmission over the internet is completely secure.',
    ],
  },
  {
    heading: 'Your Rights',
    paragraphs: [
      'You may ask us to access, correct or delete the personal information we hold about you. To make a request, please use the contact page of this website.',
    ],
  },
  {
    heading: "Children's Privacy",
    paragraphs: [
      'This website is not directed at children under 13, and we do not knowingly collect personal information from children.',
    ],
  },
  {
    heading: 'Changes to This Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with a new "last updated" date.',
    ],
  },
  {
    heading: 'Contact Us',
    paragraphs: ['If you have questions about this Privacy Policy, please reach us through the Contact page.'],
  },
]

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      metaTitle="Privacy Policy | HomeCraft"
      metaDescription="Read the HomeCraft Privacy Policy to learn what information we collect, how we use it and how we protect your privacy."
      path="/privacy-policy"
      updated="November 10, 2026"
      sections={sections}
    />
  )
}