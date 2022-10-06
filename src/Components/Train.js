/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: timblewee (https://sketchfab.com/timblewee)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/bombardier-s-stock-london-underground-a6718eff2dc843c48fd54376b4c70b06
title: Bombardier S Stock London Underground
*/

import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three';

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations, scene } = useGLTF('/web/bombardier_s_stock_london_underground.glb')
  const { actions } = useAnimations(animations, group)

  const [runX, setRunX] = useState(1);

  useEffect(() => {

    group.current.position.set(runX, -1.9, 0.3);

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    if(props.animate){
      // actions.Animation.fadeIn(0.2);
      actions.Animation.play();
      actions.Animation.setLoop(THREE.LoopOnce);
      // actions.Animation.fadeOut(0.2);

    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);

    }

  }, [props.animate, runX])
 
  function handleKeyDown(e) {
    if(e.keyCode === 37){
      console.log("heej lijevo")
      setRunX(runX - 2)
    }

    if(e.keyCode === 38){
      console.log("heej gore")
    }

    if(e.keyCode === 39){
      console.log("heej desno")
      setRunX(runX + 2)

    }

    if(e.keyCode === 40){
      console.log("heej dole")

    }
  }

  function handleKeyUp(e) {

  }


 
  return (
    <group ref={group} {...props} dispose={null} rotation={[0, -Math.PI / 2, 0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Doors_6" scale={[0.9, 0.9, 1]}>
                <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.Grey} />
                <mesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.material} />
                <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.Black_Plastic_Matt} />
                <mesh name="Object_27" geometry={nodes.Object_27.geometry} material={materials.Cream} />
                <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.Button_Silver} />
                <mesh name="Object_29" geometry={nodes.Object_29.geometry} material={materials.Glass} />
                <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials['Material.001']} />
              </group>
              <group name="Doors001_56" scale={[0.9, 0.9, 1]}>
                <mesh name="Object_172" geometry={nodes.Object_172.geometry} material={materials.material} />
                <mesh name="Object_173" geometry={nodes.Object_173.geometry} material={materials.Black_Plastic_Matt} />
                <mesh name="Object_174" geometry={nodes.Object_174.geometry} material={materials.Cream} />
                <mesh name="Object_175" geometry={nodes.Object_175.geometry} material={materials.Button_Silver} />
                <mesh name="Object_176" geometry={nodes.Object_176.geometry} material={materials.Glass} />
                <mesh name="Object_177" geometry={nodes.Object_177.geometry} material={materials['Material.001']} />
              </group>
              <group name="Empty_57" position={[1.34, -0.59, 0]} scale={0.39} />
              <group name="Doors002_58" rotation={[-Math.PI, 0, -Math.PI]} scale={[0.9, 0.9, 1]}>
                <mesh name="Object_180" geometry={nodes.Object_180.geometry} material={materials.Grey} />
                <mesh name="Object_181" geometry={nodes.Object_181.geometry} material={materials.material} />
                <mesh name="Object_182" geometry={nodes.Object_182.geometry} material={materials.Black_Plastic_Matt} />
                <mesh name="Object_183" geometry={nodes.Object_183.geometry} material={materials.Cream} />
                <mesh name="Object_184" geometry={nodes.Object_184.geometry} material={materials.Button_Silver} />
                <mesh name="Object_185" geometry={nodes.Object_185.geometry} material={materials.Glass} />
                <mesh name="Object_186" geometry={nodes.Object_186.geometry} material={materials['Material.001']} />
              </group>
              <group name="Doors003_59" rotation={[-Math.PI, 0, -Math.PI]} scale={[0.9, 0.9, 1]}>
                <mesh name="Object_188" geometry={nodes.Object_188.geometry} material={materials.material} />
                <mesh name="Object_189" geometry={nodes.Object_189.geometry} material={materials.Black_Plastic_Matt} />
                <mesh name="Object_190" geometry={nodes.Object_190.geometry} material={materials.Cream} />
                <mesh name="Object_191" geometry={nodes.Object_191.geometry} material={materials.Button_Silver} />
                <mesh name="Object_192" geometry={nodes.Object_192.geometry} material={materials.Glass} />
                <mesh name="Object_193" geometry={nodes.Object_193.geometry} material={materials['Material.001']} />
              </group>
              <group name="Empty001_60" position={[-1.28, -0.59, 0]} scale={0.39} />
              <group name="Main_Body_2">
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Roof_Black} />
                <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.White} />
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.Front_Yellow} />
                <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Blue} />
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.Grey} />
                <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.Black_Plastic_Glossy} />
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.Cream} />
              </group>
              <group name="Front_End_3">
                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.material} />
                <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials['Grey.001']} />
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.Black_Plastic_Matt} />
                <mesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.Silver_Refletor} />
                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.Glass} />
                <mesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.Button_Silver} />
              </group>
              <group name="Windscreen_4">
                <mesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.Black_Plastic_Glossy} />
                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.Glass} />
              </group>
              <group name="Front_Vents_5">
                <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.Black_Plastic_Matt} />
              </group>
              <group name="Main_Body_Windows_7">
                <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials.Black_Plastic_Matt} />
                <mesh name="Object_33" geometry={nodes.Object_33.geometry} material={materials.Glass} />
              </group>
              <group name="Front_Door_8">
                <mesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials.material} />
                <mesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials.Glass} />
                <mesh name="Object_37" geometry={nodes.Object_37.geometry} material={materials.Black_Plastic_Matt} />
                <mesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials.Cream} />
              </group>
              <group name="Couplers_9">
                <mesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials.Roof_Black} />
                <mesh name="Object_41" geometry={nodes.Object_41.geometry} material={materials.Button_Silver} />
              </group>
              <group name="Firont_Hand_Rails_10" position={[-0.41, 2.31, 9.55]} scale={[1, 0.41, 1]}>
                <mesh name="Object_43" geometry={nodes.Object_43.geometry} material={materials.Grey} />
              </group>
              <group name="Door_Handle001_11" position={[-0.35, 2.31, 9.55]} scale={[1, 0.41, 1]}>
                <mesh name="Object_45" geometry={nodes.Object_45.geometry} material={materials.Grey} />
              </group>
              <group name="Door_Handle_12" position={[-0.34, 1.53, 9.55]} scale={[1, 0.41, 1]}>
                <mesh name="Object_47" geometry={nodes.Object_47.geometry} material={materials.Grey} />
                <mesh name="Object_48" geometry={nodes.Object_48.geometry} material={materials.material} />
              </group>
              <group name="Connector_Outside_13">
                <mesh name="Object_50" geometry={nodes.Object_50.geometry} material={materials.Grey} />
                <mesh name="Object_51" geometry={nodes.Object_51.geometry} material={materials.Button_Silver} />
              </group>
              <group name="Rear_Connector_Flex_14">
                <mesh name="Object_53" geometry={nodes.Object_53.geometry} material={materials['Grey.001']} />
                <mesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials.Button_Silver} />
              </group>
              <group name="Foot_Plate_15">
                <mesh name="Object_56" geometry={nodes.Object_56.geometry} material={materials.Black_Plastic_Matt} />
                <mesh name="Object_57" geometry={nodes.Object_57.geometry} material={materials.Button_Silver} />
                <mesh name="Object_58" geometry={nodes.Object_58.geometry} material={materials.Front_Yellow} />
              </group>
              <group name="Undercarriage_16">
                <mesh name="Object_60" geometry={nodes.Object_60.geometry} material={materials.Silver_Gold} />
                <mesh name="Object_61" geometry={nodes.Object_61.geometry} material={materials.Roof_Black} />
                <mesh name="Object_62" geometry={nodes.Object_62.geometry} material={materials.Grey} />
                <mesh name="Object_63" geometry={nodes.Object_63.geometry} material={materials.Black_Plastic_Matt} />
                <mesh name="Object_64" geometry={nodes.Object_64.geometry} material={materials.Wheels} />
                <mesh name="Object_65" geometry={nodes.Object_65.geometry} material={materials.Front_Yellow} />
                <mesh name="Object_66" geometry={nodes.Object_66.geometry} material={materials.Wheels} />
                <mesh name="Object_67" geometry={nodes.Object_67.geometry} material={materials.Roof_Black} />
                <mesh name="Object_68" geometry={nodes.Object_68.geometry} material={materials.Wheels} />
              </group>
              <group name="Headlights_17">
                <mesh name="Object_70" geometry={nodes.Object_70.geometry} material={materials.Black_Plastic_Glossy} />
                <mesh name="Object_71" geometry={nodes.Object_71.geometry} material={materials.Glass} />
              </group>
              <group name="Bumpers_18">
                <mesh name="Object_73" geometry={nodes.Object_73.geometry} material={materials.Button_Silver} />
                <mesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials.Black_Plastic_Matt} />
                <mesh name="Object_75" geometry={nodes.Object_75.geometry} material={materials.material} />
              </group>
              <group name="Roof_Bolts_19">
                <mesh name="Object_77" geometry={nodes.Object_77.geometry} material={materials.Button_Silver} />
              </group>
              <group name="Roof_Bolts001_20">
                <mesh name="Object_79" geometry={nodes.Object_79.geometry} material={materials.Button_Silver} />
              </group>
              <group name="Headlight_21">
                <mesh name="Object_81" geometry={nodes.Object_81.geometry} material={materials.Silver_Refletor} />
                <mesh name="Object_82" geometry={nodes.Object_82.geometry} material={materials.Light} />
              </group>
              <group name="Fog_Lights_22">
                <mesh name="Object_84" geometry={nodes.Object_84.geometry} material={materials.Glass} />
              </group>
              <group name="Front_Sign_23" scale={0.02}>
                <mesh name="Object_86" geometry={nodes.Object_86.geometry} material={materials.Silver_Gold} />
                <mesh name="Object_87" geometry={nodes.Object_87.geometry} material={materials.Black_Plastic_Glossy} />
                <mesh name="Object_88" geometry={nodes.Object_88.geometry} material={materials.Glass} />
              </group>
              <group name="Arial_24">
                <mesh name="Object_90" geometry={nodes.Object_90.geometry} material={materials.Grey} />
                <mesh name="Object_91" geometry={nodes.Object_91.geometry} material={materials.material} />
                <mesh name="Object_92" geometry={nodes.Object_92.geometry} material={materials.Button_Silver} />
              </group>
              <group name="Headlight_Bulbs_25">
                <mesh name="Object_94" geometry={nodes.Object_94.geometry} material={materials.White} />
              </group>
              <group name="Windscreen_Wiper_26">
                <mesh name="Object_96" geometry={nodes.Object_96.geometry} material={materials.Black_Plastic_Matt} />
              </group>
              <group name="Windscreen_Wiper001_27">
                <mesh name="Object_98" geometry={nodes.Object_98.geometry} material={materials.Black_Plastic_Matt} />
              </group>
              <group name="Rear_Bogie_28">
                <mesh name="Object_100" geometry={nodes.Object_100.geometry} material={materials.Wheels} />
                <mesh name="Object_101" geometry={nodes.Object_101.geometry} material={materials.Roof_Black} />
                <mesh name="Object_102" geometry={nodes.Object_102.geometry} material={materials.Button_Silver} />
                <mesh name="Object_103" geometry={nodes.Object_103.geometry} material={materials.Cream} />
                <mesh name="Object_104" geometry={nodes.Object_104.geometry} material={materials.Wheels} />
              </group>
              <group name="Bogies001_29">
                <mesh name="Object_106" geometry={nodes.Object_106.geometry} material={materials.Roof_Black} />
                <mesh name="Object_107" geometry={nodes.Object_107.geometry} material={materials.Button_Silver} />
                <mesh name="Object_108" geometry={nodes.Object_108.geometry} material={materials.Cream} />
                <mesh name="Object_109" geometry={nodes.Object_109.geometry} material={materials.Wheels} />
              </group>
              <group name="Pickups_30">
                <mesh name="Object_111" geometry={nodes.Object_111.geometry} material={materials.Button_Silver} />
                <mesh name="Object_112" geometry={nodes.Object_112.geometry} material={materials.Wheels} />
              </group>
              <group name="Ceiling_Lights_31">
                <mesh name="Object_114" geometry={nodes.Object_114.geometry} material={materials.Material} />
                <mesh name="Object_115" geometry={nodes.Object_115.geometry} material={materials.Button_Silver} />
              </group>
              <group name="Ceiling_Vents_32">
                <mesh name="Object_117" geometry={nodes.Object_117.geometry} material={materials.Cream} />
                <mesh name="Object_118" geometry={nodes.Object_118.geometry} material={materials.Black_Plastic_Matt} />
              </group>
              <group name="Driver_Door_Buttins_33">
                <mesh name="Object_120" geometry={nodes.Object_120.geometry} material={materials.Button_Silver} />
              </group>
              <group name="Side_Decals_34">
                <mesh name="Object_122" geometry={nodes.Object_122.geometry} material={materials.White} />
              </group>
              <group name="Underground_Sign_Left_35">
                <mesh name="Object_124" geometry={nodes.Object_124.geometry} material={materials.Underground_Logo} />
              </group>
              <group name="Roof_Vents_36">
                <mesh name="Object_126" geometry={nodes.Object_126.geometry} material={materials.Roof_Black} />
                <mesh name="Object_127" geometry={nodes.Object_127.geometry} material={materials.Black_Plastic_Matt} />
                <mesh name="Object_128" geometry={nodes.Object_128.geometry} material={materials.Grey} />
              </group>
              <group name="Roof_Grilles_37">
                <mesh name="Object_130" geometry={nodes.Object_130.geometry} material={materials.Grey} />
              </group>
              <group name="Underground_Sign_Right_38">
                <mesh name="Object_132" geometry={nodes.Object_132.geometry} material={materials.Underground_Logo} />
              </group>
              <group name="Car_Stands_Only_Sign_39">
                <mesh name="Object_134" geometry={nodes.Object_134.geometry} material={materials.Black_Plastic_Matt} />
                <mesh name="Object_135" geometry={nodes.Object_135.geometry} material={materials.Front_Yellow} />
              </group>
              <group name="Electricity_Warning_40">
                <mesh name="Object_137" geometry={nodes.Object_137.geometry} material={materials.Electric_Warning} />
              </group>
              <group name="Sign_Glass_41">
                <mesh name="Object_139" geometry={nodes.Object_139.geometry} material={materials.Black_Plastic_Glossy} />
                <mesh name="Object_140" geometry={nodes.Object_140.geometry} material={materials.Sign_Background} />
              </group>
              <group name="Side_Signs_46">
                <mesh name="Object_142" geometry={nodes.Object_142.geometry} material={materials.White} />
                <mesh name="Object_143" geometry={nodes.Object_143.geometry} material={materials.Black_Plastic_Matt} />
                <mesh name="Object_144" geometry={nodes.Object_144.geometry} material={materials.Sign_Background} />
              </group>
              <group name="Text007_48">
                <mesh name="Object_146" geometry={nodes.Object_146.geometry} material={materials.White} />
              </group>
              <group name="Text008_49">
                <mesh name="Object_148" geometry={nodes.Object_148.geometry} material={materials.Blue} />
              </group>
              <group name="Text009_50">
                <mesh name="Object_150" geometry={nodes.Object_150.geometry} material={materials.Blue} />
              </group>
              <group name="Seats_51">
                <mesh name="Object_152" geometry={nodes.Object_152.geometry} material={materials.White} />
                <mesh name="Object_153" geometry={nodes.Object_153.geometry} material={materials.Copper} />
                <mesh name="Object_154" geometry={nodes.Object_154.geometry} material={materials.Black_Plastic_Matt} />
              </group>
              <group name="Hand_Rails_52">
                <mesh name="Object_156" geometry={nodes.Object_156.geometry} material={materials.Poles} />
              </group>
              <group name="Springs001_53">
                <mesh name="Object_158" geometry={nodes.Object_158.geometry} material={materials['Wheels.005']} />
              </group>
              <group name="Cockpit_54" position={[0, 1.01, 9.07]} scale={[1.23, 0.38, 0.38]}>
                <mesh name="Object_160" geometry={nodes.Object_160.geometry} material={materials.Grey} />
                <mesh name="Object_161" geometry={nodes.Object_161.geometry} material={materials['Material.002']} />
                <mesh name="Object_162" geometry={nodes.Object_162.geometry} material={materials.Seat} />
                <mesh name="Object_163" geometry={nodes.Object_163.geometry} material={materials.Black_Plastic} />
                <mesh name="Object_164" geometry={nodes.Object_164.geometry} material={materials.White} />
              </group>
              <group name="Driver_Doors_55" scale={[0.9, 0.9, 1]}>
                <mesh name="Object_166" geometry={nodes.Object_166.geometry} material={materials.Black_Plastic_Matt} />
                <mesh name="Object_167" geometry={nodes.Object_167.geometry} material={materials.White} />
                <mesh name="Object_168" geometry={nodes.Object_168.geometry} material={materials.Blue} />
                <mesh name="Object_169" geometry={nodes.Object_169.geometry} material={materials.Cream} />
                <mesh name="Object_170" geometry={nodes.Object_170.geometry} material={materials.Glass} />
              </group>
              <group name="Text001_61" position={[-0.3, 3.27, 9.41]} rotation={[Math.PI / 2, 0, 0]} scale={[0.1, 0.12, 0.12]}>
                <mesh name="Object_196" geometry={nodes.Object_196.geometry} material={materials.Lit_Sign} />
              </group>
              <group name="Text010_62" position={[-0.24, 3.38, 9.41]} rotation={[Math.PI / 2, 0, 0]} scale={[0.1, 0.12, 0.12]}>
                <mesh name="Object_198" geometry={nodes.Object_198.geometry} material={materials.Lit_Sign} />
              </group>
              <group name="Text011_63" position={[-0.07, 3.51, 9.46]} rotation={[Math.PI / 2, 0, 0]} scale={[0.11, 0.13, 0.13]}>
                <mesh name="Object_200" geometry={nodes.Object_200.geometry} material={materials.Lit_Sign} />
              </group>
              <group name="Text012_64" position={[1.33, 3.07, -2.42]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.07, 0.08, 0.08]}>
                <mesh name="Object_202" geometry={nodes.Object_202.geometry} material={materials.Lit_Sign} />
              </group>
              <group name="Text013_65" position={[-1.34, 3.07, 2.42]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[0.07, 0.08, 0.08]}>
                <mesh name="Object_204" geometry={nodes.Object_204.geometry} material={materials.Lit_Sign} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/bombardier_s_stock_london_underground.glb')
