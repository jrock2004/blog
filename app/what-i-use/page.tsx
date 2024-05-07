import { ReactNode } from 'react';
import { Metadata } from 'next';

import { SITE_TITLE } from '@/constants';
import Link from '@/components/Link';

export const metadata: Metadata = {
  title: `What I Use - ${SITE_TITLE}`,
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="mt-6 text-lg font-semibold text-heading sm:mt-8 sm:text-xl lg:text-2xl">
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
}

export default function WhatIUse() {
  const ulClasses = 'mt-4 text-base font-medium text-text sm:mt-6 md:ml-12 lg:text-lg';
  const liClasses = 'mb-2 list-disc';

  return (
    <>
      <h2 className="mt-6 text-xl font-semibold text-heading sm:mt-8 sm:text-2xl lg:text-4xl">
        What I Use
      </h2>
      <div className="mt-14 flex flex-col gap-6">
        <Section title="Editor + Terminal + Fonts">
          <ul className={ulClasses}>
            <li className={liClasses}>
              <p>
                <Link href="https://neovim.io/">Neovim</Link> is the main editor I use on a daily
                basis.
              </p>
            </li>
            <li className={liClasses}>
              <p>
                <Link href="https://code.visualstudio.com/">Visual Studio Code</Link> every once in
                awhile or if I have merge conflicts I will use it.
              </p>
            </li>
            <li className={liClasses}>
              <p>
                <Link href="https://wezfurlong.org/wezterm/index.html">WezTerm</Link> is the
                terminal emulator I use.
              </p>
            </li>
            <li className={liClasses}>
              <p>
                <Link href="https://vercel.com/font">Geist font</Link> is the font I use in my
                editor and terminal.
              </p>
            </li>
          </ul>
        </Section>
        <Section title="Desktop Apps">
          <ul className={ulClasses}>
            <li className={liClasses}>
              <p>
                I use <Link href="https://www.raycast.com/">Raycast</Link> everyday to open my apps
                that I am going to use. I use it as my calculator as well when I need to do math.
              </p>
            </li>
            <li className={liClasses}>
              <p>
                For a password manager I use <Link href="https://1password.com/">1Password</Link>.
              </p>
            </li>
            <li className={liClasses}>
              <p>
                My main browser I use is Safari, but I have Firefox and Chrome installed to do cross
                browser testing and when I need a special dev tools utility that does not work in
                Safari
              </p>
            </li>
            <li className={liClasses}>
              My markdown editor that I use to take notes for work and other things is called{' '}
              <Link href="https://getdrafts.com/">Drafts</Link>.
            </li>
            <li className={liClasses}>
              I am not huge when it comes to journaling but when I do, I go to{' '}
              <Link href="https://dayoneapp.com/">Day One</Link>.
            </li>
          </ul>
        </Section>
        <Section title="Desk Setup">
          <ul className={ulClasses}>
            <li className={liClasses}>
              <p>
                My standing desk is the 70x30 inch{' '}
                <Link href="https://www.autonomous.ai/standing-desks/smartdesk-2-home">
                  SmartDesk 2
                </Link>{' '}
                from Autonomous
              </p>
            </li>
            <li className={liClasses}>
              <p>The computer I am using on my desk is the M3 Macbook Pro:</p>
              <ul className={`${ulClasses} mt-3 sm:mt-3`}>
                <li className={liClasses}>
                  <p>Chip: Apple M3</p>
                </li>
                <li className={liClasses}>
                  <p>Memory: 16 GB</p>
                </li>
              </ul>
            </li>
            <li className={liClasses}>
              <p>
                The dock that I am using is a{' '}
                <Link href="https://www.amazon.com/CalDigit-TS4-Thunderbolt-Dock-USB/dp/B09GK8LBWS/ref=sr_1_3?crid=1Y0LCRKENEWUU&dib=eyJ2IjoiMSJ9.46cz5Y6fFC5D4jd_YtCxyBzYzEggjIL0HQl_6pKeyGS5TN3AO64SdSWdoUT5vqfsZnSFZIvQ5Oyq3myGNvlfrtyauIx_5KHiP_nIJZCPOnsJ_4SL6n5l9mVZ6NPBjZIxHOuFxnnA_dYnBFBDfMtVUDmkEf3DxeK55OvFJJA3HseBHNVwlmcigJy4ev8eiDKtGbpVz2_6l5tQ4AsMFpKTB-iRr23dGXIwQVM41IGk5pI.Gt9f2Ei3GwnoI4s4U3Z41RV9eSwQZhaT3q7qKj6O0eo&dib_tag=se&keywords=CalDigit+TS4&qid=1714962600&sprefix=caldigit+ts4%2Caps%2C95&sr=8-3">
                  CalDigit
                </Link>{' '}
                Thunderbolt 4.
              </p>
            </li>
            <li className={liClasses}>
              <p>
                My monitor I use is the{' '}
                <Link href="https://www.amazon.com/dp/B096YNP6ZR?ref=ppx_yo2ov_dt_b_product_details&th=1">
                  Samsung 49&quot; Odyssey Neo G9
                </Link>
                .
              </p>
            </li>
            <li className={liClasses}>
              <p>
                For my keyboard I am using the{' '}
                <Link href="https://www.amazon.com/Keychron-Q11-Ergonomic-Mechanical-Hot-Swappable/dp/B0C9Q7S8CB/ref=sr_1_3?crid=16K3G6ES0ZW3Z&dib=eyJ2IjoiMSJ9.duxKCR6yFWyR5Fc2Rimr3CMwQxJ03usr23Y1qPFnr0eWzWuUGxRAsC6ZU62_VP-qc1g7t0X9RBrp2JAbqJb1OBB4M40tPrfCRMUr18IB6c6lPkmQmA6uvGS0pvEV1q3EChjOPWOBRbKp7d4v9l7NGyY7vbrrY5NSv_RrhYGleQGnDMtPSO-UGVW-Efbin265Ala6JlL55UYJxeAIlvbC7LEGATaImZpEpDQwneMdI0c.9UGLnbKhPlgIBofvqDO_SLGi4fylri95o17yzVYPRMw&dib_tag=se&keywords=keychron+q11&qid=1714962867&sprefix=keychrom+q11%2Caps%2C88&sr=8-3&ufe=app_do%3Aamzn1.fos.9f2cdd2d-df47-45ac-9666-580d6bb0ee10">
                  Keychron Q11
                </Link>{' '}
                split keyboard.
              </p>
            </li>
            <li className={liClasses}>
              <p>
                For my mouse I switch between using the{' '}
                <Link href="https://www.apple.com/shop/product/MK2D3AM/A/magic-trackpad-white-multi-touch-surface">
                  Apple Trackpad
                </Link>{' '}
                and a{' '}
                <Link href="https://www.amazon.com/gp/product/B0BSKX9V7C/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1">
                  ROG Harpe Ace
                </Link>{' '}
                wireless mouse
              </p>
            </li>
            <li className={liClasses}>
              <p>
                Microphone, I am using the{' '}
                <Link href="https://www.amazon.com/gp/product/B07ZPC2FMQ/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1">
                  Audio-Technica ATR2500x
                </Link>
              </p>
            </li>
          </ul>
        </Section>
      </div>
    </>
  );
}
