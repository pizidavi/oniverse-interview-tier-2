import clsx from 'clsx';
import { twMerge, type ClassNameValue } from 'tailwind-merge';

export const cn = (...classLists: ClassNameValue[]) => twMerge(clsx(classLists));
