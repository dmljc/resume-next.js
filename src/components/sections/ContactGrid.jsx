'use client';

import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card.jsx';

import { Button } from '../ui/button.jsx';
import { Mail, Phone, QrCode } from 'lucide-react';
import { showMessage } from '../../lib/message.js';
import { useI18n } from '../../lib/i18n-core.js';
import { contactInfo } from './contact.data.js';

const WECHAT_QR_CODE_URL = 'https://zhangfc-resume.oss-cn-hangzhou.aliyuncs.com/WeChatQrCode.jpg';

const contacts = [
    {
        icon: Phone,
        titleKey: 'contact.phone',
        desc: contactInfo.phone,
        actionKey: 'phone',
    },
    {
        icon: Mail,
        titleKey: 'contact.email',
        desc: contactInfo.email,
        actionKey: 'email',
    },
    {
        icon: QrCode,
        titleKey: 'contact.wechat',
        desc: contactInfo.wechat,
        actionKey: 'wechat',
    },
];

export default function ContactGrid() {
    const { t } = useI18n();
    return (
        <section id="contact" className="pt-14 sm:pt-16 pb-32 sm:pb-40 scroll-mt-24">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold gradient-brand">
                        {t('contact.title')}
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                        {t('contact.subtitle')}
                    </p>
                </div>
                <div className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
                    {contacts.map(c => (
                        <Card
                            key={c.desc}
                            className="text-card-foreground shadow-black/5 bg-card rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700 h-full flex flex-col"
                        >
                            <CardHeader className="pb-4 text-center">
                                <div className="flex justify-center">
                                    <div className="group relative h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-gray-100 dark:border-gray-700 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:border-primary/50">
                                        <c.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary transition-transform duration-200" />
                                        {c.actionKey === 'wechat' && (
                                            <div className="pointer-events-none absolute left-1/2 bottom-full z-20 mb-4 hidden w-56 -translate-x-1/2 rounded-2xl border border-gray-100 bg-white p-3 opacity-0 shadow-2xl transition-opacity duration-200 group-hover:opacity-100 dark:border-gray-700 dark:bg-gray-900 lg:block">
                                                <Image
                                                    src={WECHAT_QR_CODE_URL}
                                                    alt="张芳朝微信二维码"
                                                    width={448}
                                                    height={572}
                                                    className="h-auto w-full rounded-xl"
                                                    unoptimized
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <CardTitle className="mt-3 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                                    {t(c.titleKey)}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="rounded-lg px-4 py-3 text-sm sm:text-base text-gray-700 dark:text-gray-200 text-center font-mono tracking-wide">
                                    {c.desc}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    variant="gradient"
                                    className="w-full"
                                    onClick={async () => {
                                        try {
                                            await navigator.clipboard?.writeText?.(c.desc);
                                            showMessage(
                                                `${t(`contact.copy.${c.actionKey}`)}${t('contact.copy.suffix')}`,
                                                2000,
                                                { anchorSelector: '#contact', offsetRem: 2 }
                                            );
                                        } catch {
                                            showMessage(t('contact.copy.fail'), 2000, {
                                                anchorSelector: '#contact',
                                                offsetRem: 2,
                                            });
                                        }
                                    }}
                                >
                                    {t(`contact.copy.${c.actionKey}`)}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
