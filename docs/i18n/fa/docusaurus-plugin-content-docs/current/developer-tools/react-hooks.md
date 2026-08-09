---
title: هوک‌های React
description: کتابخانه هوک‌های React برای ساخت اپلیکیشن‌های اجتماعی غیرمتمرکز روی پروتکل Bitsocial.
sidebar_position: 1
---

# هوک‌های React

بسته `bitsocial-react-hooks` یک API آشنا بر پایه هوک‌های React برای کار با پروتکل Bitsocial در اختیار می‌گذارد. واکشی فیدها، کامنت‌ها و نمایه‌های نویسندگان، مدیریت حساب‌ها، انتشار محتوا و عضویت در انجمن‌ها همه با آن انجام می‌شود — بدون هیچ اتکایی به یک سرور مرکزی.

این کتابخانه رابط اصلی مورد استفاده [5chan](/apps/5chan/) و دیگر اپلیکیشن‌های کلاینت Bitsocial است.

:::note
`bitsocial-react-hooks` فعلاً روی npm منتشر نمی‌شود و مستقیماً از GitHub برداشته می‌شود.
:::

## نصب

چون این بسته هنوز روی npm نیست، آن را مستقیماً از GitHub نصب کنید و به یک هش کامیت مشخص پین کنید:

```bash
yarn add https://github.com/bitsocialnet/bitsocial-react-hooks.git#<commit-hash>
```

`<commit-hash>` را با کامیتی که می‌خواهید هدف بگیرید جایگزین کنید.

## مرور API

هوک‌ها بر اساس کارکردشان دسته‌بندی شده‌اند. در ادامه خلاصه‌ای از پرکاربردترین هوک‌های هر دسته آمده است. برای دیدن امضاها، پارامترها و انواع بازگشتی کامل، به [مرجع کامل API روی GitHub](https://github.com/bitsocialnet/bitsocial-react-hooks) سر بزنید.

### حساب‌ها

مدیریت حساب‌های محلی کاربر، هویت و تنظیمات.

- `useAccount(accountName?)` — شیء حساب فعال (یا حسابی که نامش را بدهید) را برمی‌گرداند
- `useAccounts()` — همه حساب‌های ذخیره‌شده روی دستگاه را برمی‌گرداند
- `useAccountComments(options?)` — کامنت‌های منتشرشده با حساب فعال را برمی‌گرداند

### کامنت‌ها

واکشی کامنت‌ها و رشته‌های گفتگو و تعامل با آن‌ها.

- `useComment(commentCid?)` — یک کامنت را با CID آن واکشی می‌کند
- `useComments(commentCids?)` — چند کامنت را به‌صورت دسته‌ای واکشی می‌کند
- `useEditedComment(comment?)` — تازه‌ترین نسخه ویرایش‌شده یک کامنت را برمی‌گرداند

### انجمن‌ها

گرفتن فراداده و تنظیمات انجمن‌ها.

- هوک جست‌وجوی تک‌انجمن — یک انجمن را با آدرسش واکشی می‌کند
- هوک جست‌وجوی چند انجمن — چند انجمن را با هم واکشی می‌کند
- هوک آمار انجمن — شمار مشترکان و مطالب را برمی‌گرداند

### نویسندگان

جست‌وجوی نمایه و فراداده نویسندگان.

- `useAuthor(authorAddress?)` — نمایه یک نویسنده را واکشی می‌کند
- `useAuthorComments(options?)` — کامنت‌های یک نویسنده مشخص را برمی‌گرداند
- `useResolvedAuthorAddress(authorAddress?)` — یک نشانی خوانا برای انسان (مثلاً ENS) را به نشانی پروتکلی آن تبدیل می‌کند

### فیدها

عضویت در فیدهای محتوا و صفحه‌بندی آن‌ها.

- `useFeed(options?)` — فیدی صفحه‌بندی‌شده از مطالب یک یا چند انجمن برمی‌گرداند
- `useBufferedFeeds(feedOptions?)` — چند فید را از پیش بافر می‌کند تا رندر سریع‌تر شود
- `useAuthorFeed(authorAddress?)` — فیدی از مطالب یک نویسنده مشخص برمی‌گرداند

### کنش‌ها

انتشار محتوا و انجام عملیات نوشتن.

- `usePublishComment(options?)` — انتشار یک کامنت یا پاسخ تازه
- `usePublishVote(options?)` — ثبت رأی مثبت یا منفی
- `useSubscribe(options?)` — عضویت در یک انجمن یا لغو آن

### وضعیت‌ها و RPC

پایش وضعیت اتصال و کار با یک دیمون Bitsocial از راه دور.

- `useClientsStates(options?)` — وضعیت اتصال کلاینت‌های IPFS/pubsub را برمی‌گرداند
- هوک تنظیمات RPC — پیکربندی فعلی دیمون RPC را برمی‌گرداند

## توسعه

برای کار روی کتابخانه هوک‌ها به‌صورت محلی:

**پیش‌نیازها:** Node.js، فعال بودن Corepack، Yarn 4

```bash
git clone https://github.com/bitsocialnet/bitsocial-react-hooks.git
cd bitsocial-react-hooks
corepack enable
yarn install
```

برای دستورهای تست و ساخت به README مخزن سر بزنید.

## پیوندها

- **GitHub:** [bitsocialnet/bitsocial-react-hooks](https://github.com/bitsocialnet/bitsocial-react-hooks)
- **مجوز:** GPL-2.0-only
