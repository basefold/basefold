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
	</modeling.Component>
);
