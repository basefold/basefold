// @ts-nocheck
import { modeling, constraints, Cylinder, timingPulleys } from "@basefold/core";

export const Example02Nema17Pulley = () => (
	<modeling.Component>
		<timingPulleys.GT2Pulley name="pulley" boreDiameter="5mm" teethCount={20} />
		<Cylinder
			name="shaft"
			innerDiameter="5mm"
			wallThickness="1mm"
			height="1mm"
			topFacePlacement="pulley.topFace"
			centralAxis="pulley.centralAxis"
		/>
		{/* Another way to do the same thing */}
		{/* <constraints.SameCentralAxis object1="pulley" object2="shaft" /> */}
		<modeling.Subtract
			object1="shaft"
			object2={
				<ExtrudedRect
					depth="calc(shaft.height)"
					drawing={
						<modeling.Drawing place="shaft.topFace">
							<Rect
								width="5mm"
								height="3mm"
								centerX="shaft.topFace"
								centerY="calc(shaft.topFace.centerY - 1.5mm)"
							/>
						</modeling.Drawing>
					}
				/>
			}
		/>
	</modeling.Component>
);
