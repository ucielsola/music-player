// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'es'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * L​o​a​d​i​n​g​.​.​.
	 */
	loading: string
	/**
	 * N​o​ ​t​i​t​l​e
	 */
	noTitle: string
	/**
	 * P​l​a​y
	 */
	play: string
	/**
	 * P​a​u​s​e
	 */
	pause: string
	/**
	 * N​e​x​t
	 */
	next: string
	/**
	 * P​r​e​v​i​o​u​s
	 */
	prev: string
	/**
	 * S​h​u​f​f​l​e
	 */
	shuffle: string
	/**
	 * R​e​p​e​a​t
	 */
	repeat: string
	/**
	 * O​n
	 */
	on: string
	/**
	 * O​f​f
	 */
	off: string
}

export type TranslationFunctions = {
	/**
	 * Loading...
	 */
	loading: () => LocalizedString
	/**
	 * No title
	 */
	noTitle: () => LocalizedString
	/**
	 * Play
	 */
	play: () => LocalizedString
	/**
	 * Pause
	 */
	pause: () => LocalizedString
	/**
	 * Next
	 */
	next: () => LocalizedString
	/**
	 * Previous
	 */
	prev: () => LocalizedString
	/**
	 * Shuffle
	 */
	shuffle: () => LocalizedString
	/**
	 * Repeat
	 */
	repeat: () => LocalizedString
	/**
	 * On
	 */
	on: () => LocalizedString
	/**
	 * Off
	 */
	off: () => LocalizedString
}

export type Formatters = {}