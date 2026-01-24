// @ts-nocheck
import {
	modeling,
	ExtrudedFlaredRectangle,
	Tunnel,
	ExtrudedFlatFunnel,
	CenterAlignedOnFace,
} from "@basefold/core";

export const Example01AirKnife = () => (
	<modeling.Component>
		<ExtrudedFlatFunnel
			name="body"
			wideSideWidth="100mm"
			tubeLength="20mm"
			narrowSideWidth="20mm"
			hollow
			wallWidth="5mm"
			cornerRadius="5mm"
		/>
		<FaceGroup centerAligned evenlyDistributed face="body.wideSideFace">
			{[1, 2, 3, 4, 5].map((n) => (
				<Tunnel
					openingShape="circle"
					openShapeDiameter="3mm"
					name={`knifehole${n}`}
					wallWidth="5mm"
					endFace="intake"
					pathShape="bezier"
				/>
			))}
		</FaceGroup>
		<Hole
			name="intake"
			diameter="5mm"
			wallWidth="5mm"
			onFace="body.narrowSide"
		/>
	</modeling.Component>
);
