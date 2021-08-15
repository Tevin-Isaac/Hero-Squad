import static org.junit.Assert.*;

import org.junit.*;

public class HeroTest {

    @Test
    public void Hero_instantiatesCorrectly_true() {
        Hero myHero = new Hero("Tevin",90,"shooter","Kryptonite");
        assertTrue(true);
    }
    @Test
    public void getName_forHeroesName_String() {
        Hero myHero = new Hero("Tevin",90,"shooter","Kryptonite");
        String expected = "Tevin";
        assertEquals(expected, myHero.getName());
    }
    @Test
    public void getAge_forHeroesName_String() {
        Hero myHero = new Hero("Tevin",90,"shooter","Kryptonite");
        int expected = 65;
        assertEquals(expected, myHero.getAge());
    }
    @Test
    public void getWeakness_forHeroesName_String() {
        Hero myHero = new Hero("Tevin",90,"shooter","Kryptonite");
        String expected = "Tevin";
        assertEquals(expected, myHero.getWeakness());
    }
    @Test
    public void getPower_forHeroesName_String() {
        Hero myHero = new Hero("Tevin",90,"shooter","Kryptonite");
        String expected = "Tevin";
        assertEquals(expected, myHero.getPower());
    }
    @Test
    public void getId_forHeroesName_int() {
        Hero.clear();
        Hero myHero = new Hero("Tevin",90,"shooter","Kryptonite");
        assertEquals(1, myHero.getId());
    }

}
