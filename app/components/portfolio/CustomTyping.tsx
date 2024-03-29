'use client';

import { useCallback, useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";

interface Props {
	text: string
}

const CustomTyping = ({ text }: Props) => {
	const [isFirstLoaded, setIsFirstLoaded] = useState(true);
	const [isTyping, setIsTyping] = useState(false);
	const [typingText, setTypingText] = useState("");
	
	const toKorChars = useCallback((text: string) => {
		const cCho = [ 'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ];
		const cJung = [ 'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ' ];
		const cJong = [ '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ];
		
		let cho, jung, jong;
		let chars = [], cCode;
		for (let i = 0; i < text.length; i++) {
			cCode = text.charCodeAt(i);
			if (cCode == 32) {
				chars.push(" ");
				continue;
			}
			
			// 한글이 아닌 경우
			if (cCode < 0xAC00 || cCode > 0xD7A3) {
				chars.push(text.charAt(i)); continue;
			}
			cCode = text.charCodeAt(i) - 0xAC00;
			
			jong = cCode % 28; // 종성
			jung = ((cCode - jong) / 28 ) % 21; // 중성
			cho = (((cCode - jong) / 28 ) - jung ) / 21; // 초성
			
			chars.push(cCho[cho]);
			chars.push(String.fromCharCode( 44032 + (cho * 588) + (jung  * 28)));
			if (cJong[jong] !== '') {
				chars.push(String.fromCharCode( 44032 + (cho * 588) + (jung  * 28) + jong ));
			}
		}
		
		return chars;
	}, []);
	
	useEffect(() => {
		if (isFirstLoaded && !isTyping && text) {
			setIsFirstLoaded(false);
			setIsTyping(true);
			
			// 타이핑할 문장
			let result = text.split('');
			let typing: Array<Array<string>> = [];
			
			// 각글자 초성, 중성, 종성으로 나눔
			for (let i = 0; i < result.length; i++) {
				typing[i] = toKorChars(result[i]);
			}
			
			let i = 0, j = 0, newText = '';
			
			let inter = setInterval(() => {
				if (i <= typing.length - 1) {
					setTypingText(newText + typing[i][j++]);
					
					if (j == typing[i].length) {
						newText += typing[i++][j - 1];
						j = 0;
					}
				} else {
					clearInterval(inter);
					setIsTyping(false);
				}
			}, 50);
		}
	}, [text, isTyping, toKorChars, isFirstLoaded]);
	
	return (
		<>
			{
				isMobile ? (
					<div className={`inline-block leading-6`}>
						{ text }
					</div>
				) : (
					<div
						className={`
							inline-block
							leading-6
							${isTyping ? 'border-r-[1px] pr-0.5 animate-[cursor-blink_0.5s_infinite]' : ''}
						`}
					>
						{ typingText }
					</div>
				)
			}
		</>
	);
};

export default CustomTyping;
