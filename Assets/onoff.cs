using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class onoff : MonoBehaviour
{
    public GameObject square;

    public void ctrl(string text) {
        if (text == "0") {
            square.SetActive(false);
        }
        if (text == "1") {
            square.SetActive(true);
        }
    }
}
