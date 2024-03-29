import { ScreenType } from '@/types/portfolio/ScreenType';
import { ReactElement } from 'react';

export interface ProjectType {
	name: string;
	thumbnail?: string;
	screenType?: ScreenType;
	description?: string;
	content?: ReactElement;
	tags?: string[];
	startDate?: string;
	endDate?: string;
	blurDataURL?: string;
}
